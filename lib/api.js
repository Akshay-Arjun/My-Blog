import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parse } from 'date-fns';


const blogsDirectory = join(process.cwd(), 'content', 'blogs');
const hackersDirectory = join(process.cwd(), 'content', 'hackers');
const tryhackersDirectory = join(process.cwd(), 'content', 'tryhackers');
const certificatesDirectory = join(process.cwd(), 'content', 'certificates');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
  
}
export function getHackerSlugs() {
  return fs.readdirSync(hackersDirectory);
  
}
export function getTryHackerSlugs() {
  return fs.readdirSync(tryhackersDirectory);
  
}
export function getCertificateSlugs() {
  return fs.readdirSync(certificatesDirectory);
  
}

export function getCertificateBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(certificatesDirectory, `${realSlug}.md`);
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

export function getTryHackerBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(tryhackersDirectory, `${realSlug}.md`);
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

export function getHackerBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(hackersDirectory, `${realSlug}.md`);
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


export function getAllHackers(fields = []) {
  const slugs = getHackerSlugs();
  const hackers = slugs
    .map((slug) => getHackerBySlug(slug, fields))
    .sort((hacker1, hacker2) => (parseDate(hacker1.date) > parseDate(hacker2.date) ? -1 : 1));
  return hackers;
}

export function getAllTryHackers(fields = []) {
  const slugs = getTryHackerSlugs();
  const tryhackers = slugs
    .map((slug) => getTryHackerBySlug(slug, fields))
    .sort((tryhacker1, tryhacker2) => (parseDate(tryhacker1.date) > parseDate(tryhacker2.date) ? -1 : 1));
  return tryhackers;
}

export function getAllCertificates(fields = []) {
  const slugs = getCertificateSlugs();
  const certificates = slugs
    .map((slug) => getCertificateBySlug(slug, fields))
    .sort((certificate1, certificate2) => (parseDate(certificate1.date) > parseDate(certificate2.date) ? -1 : 1));
  return certificates;
}