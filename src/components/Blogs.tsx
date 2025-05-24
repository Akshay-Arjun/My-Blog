import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, Folder, File, ChevronRight } from 'lucide-react';
import { BlogPost } from '../types';
import BlogViewer from './BlogViewer';
import { getPosts } from '../utils/blogUtils';

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSelectPost = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  // Check if we're viewing a specific post
  const isViewingPost = location.pathname !== '/blogs' && location.pathname !== '/blogs/';

  return (
    <div className="blogs mt-6">
      <div className="section-header mb-4">
        <span className="text-terminal-accent">$ ls -la posts/</span>
      </div>

      <Routes>
        <Route path="/" element={
          <div className="blog-browser flex flex-col md:flex-row gap-4">
            <div className="file-list w-full md:w-1/3 border border-gray-700 bg-black bg-opacity-30 rounded overflow-hidden">
              <div className="file-list-header bg-gray-800 p-2 text-terminal-accent flex items-center">
                <Folder size={18} className="mr-2" />
                <span>posts/</span>
              </div>
              
              {loading ? (
                <div className="p-4 text-terminal-text">Loading posts...</div>
              ) : posts.length === 0 ? (
                <div className="p-4 text-terminal-warning">No posts found.</div>
              ) : (
                <ul className="p-2">
                  {posts.map((post) => (
                    <li 
                      key={post.slug} 
                      className={`p-2 mb-1 rounded cursor-pointer flex items-center hover:bg-gray-800 transition-colors ${
                        location.pathname === `/blogs/${post.slug}` ? 'bg-gray-800' : ''
                      }`}
                      onClick={() => handleSelectPost(post.slug)}
                    >
                      <File size={16} className="mr-2 text-terminal-accent" />
                      <div className="flex-grow">
                        <div className="text-terminal-text">{post.title}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock size={12} className="mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-500" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="blog-preview w-full md:w-2/3 border border-gray-700 bg-black bg-opacity-30 rounded p-4">
              {!isViewingPost && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-terminal-accent mb-3">
                    <File size={48} />
                  </div>
                  <h3 className="text-xl mb-2">Select a post from the list</h3>
                  <p className="text-gray-400">Click on a file to view its contents</p>
                </div>
              )}
            </div>
          </div>
        } />
        <Route path=":slug" element={<BlogViewer posts={posts} />} />
      </Routes>
    </div>
  );
};

export default Blogs;