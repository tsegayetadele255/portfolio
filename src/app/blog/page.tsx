import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogListClient, { BlogPost } from './BlogListClient';

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(blogDir);
  const posts: BlogPost[] = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  return <BlogListClient posts={posts} />;
}

