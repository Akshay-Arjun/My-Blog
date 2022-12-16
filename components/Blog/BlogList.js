import BlogCard from "./BlogCard";

export default function BlogList({ blog: blog }) {
  return (
    <section className="mx-9">
      {blog.map((blog) => (
        <blogCard
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