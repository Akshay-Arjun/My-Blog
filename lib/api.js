import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parse } from 'date-fns';


const blogsDirectory = join(process.cwd(), 'content', 'blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
  
}


export function getBlogBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}



const parseDate = (date) => {
  return parse(date, 'dd-MM-yyyy', new Date(), {
    locale: 'en-IN',
    addSuffix: true
  });
};




export function getAllBlogs(fields = []) {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields))
    .sort((blog1, blog2) => (parseDate(blog1.date) > parseDate(blog2.date) ? -1 : 1));
  return blogs;
}
