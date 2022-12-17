import BlogCard from "./BlogCard";

export default function BlogsList({ blogs: blogs }) {
  return (
    <section className="mx-9">
      {blogs && blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          title={blog.title}
          slug={blog.slug}
          coverImage={blog.coverImage}
          excerpt={blog.excerpt}
        />
      ))}
    </section >
  );
};
