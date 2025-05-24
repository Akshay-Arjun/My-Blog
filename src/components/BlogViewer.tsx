import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BlogPost } from '../types';

interface BlogViewerProps {
  posts: BlogPost[];
}

const BlogViewer: React.FC<BlogViewerProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="p-4 text-terminal-warning">
        <p>Post not found: {slug}</p>
        <button 
          className="mt-2 text-terminal-accent underline hover:text-terminal-text"
          onClick={() => navigate('/blogs')}
        >
          Return to blog list
        </button>
      </div>
    );
  }

  return (
    <div className="blog-viewer">
      <button 
        className="mb-4 flex items-center text-terminal-accent hover:text-terminal-text"
        onClick={() => navigate('/blogs')}
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to posts
      </button>
      
      <div className="blog-post bg-black bg-opacity-30 border border-gray-700 rounded p-6">
        <h1 className="text-2xl text-terminal-accent mb-2">{post.title}</h1>
        <div className="meta text-sm text-gray-400 mb-6 flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock size={14} className="mr-1" />
          <span>{post.readTime} min read</span>
        </div>
        
        <div className="markdown-content text-terminal-text">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogViewer;