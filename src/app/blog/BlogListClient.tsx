"use client";
import { useState } from 'react';
import Link from 'next/link';

export type BlogPost = {
  slug: string;
  title?: string;
  date?: string;
  categories?: string[];
  tags?: string[];
  featured?: boolean;
};

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const allCategories = Array.from(new Set(posts.flatMap(p => p.categories ?? [])));
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags ?? [])));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  let filtered = posts;
  if (selectedCategory) filtered = filtered.filter(p => p.categories?.includes(selectedCategory));
  if (selectedTag) filtered = filtered.filter(p => p.tags?.includes(selectedTag));

  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        <button onClick={() => setSelectedCategory(null)} className={`px-3 py-1 rounded ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>All Categories</button>
        {allCategories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1 rounded ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>{cat}</button>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button onClick={() => setSelectedTag(null)} className={`px-3 py-1 rounded ${selectedTag === null ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>All Tags</button>
        {allTags.map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-3 py-1 rounded ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>{tag}</button>
        ))}
      </div>
      {featured.length > 0 && <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Featured Posts</h2>
        <ul>
          {featured.map(post => (
            <BlogPostListItem key={post.slug} post={post} />
          ))}
        </ul>
      </div>}
      <ul>
        {others.map(post => (
          <BlogPostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}

function BlogPostListItem({ post }: { post: BlogPost }) {
  return (
    <li className="mb-6">
      <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
        {post.title || post.slug}
      </Link>
      <div className="text-gray-500 text-sm mb-1">{post.date}</div>
      {post.categories && <div className="flex flex-wrap gap-2 mb-1">
        {post.categories.map((cat: string) => (
          <span key={cat} className="bg-purple-100 dark:bg-purple-800 text-xs px-2 py-1 rounded">{cat}</span>
        ))}
      </div>}
      {post.tags && <div className="flex flex-wrap gap-2">
        {post.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 dark:bg-blue-800 text-xs px-2 py-1 rounded">{tag}</span>
        ))}
      </div>}
    </li>
  );
}
