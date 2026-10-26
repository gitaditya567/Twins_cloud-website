// Syncs the expanded static guides in frontend/src/app/blog/posts.js into MongoDB.
// Usage (from backend/):
//   node scripts/sync-blog-posts.mjs          -> dry run, shows what would change
//   node scripts/sync-blog-posts.mjs --apply  -> writes to the database
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const APPLY = process.argv.includes('--apply');
const FIELDS = ['title', 'summary', 'content', 'category', 'author', 'readTime', 'date'];

const postsFile = path.join(__dirname, '..', '..', 'frontend', 'src', 'app', 'blog', 'posts.js');
const { BLOG_POSTS } = await import(pathToFileURL(postsFile).href);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/twinscloud';
await mongoose.connect(MONGO_URI);

// Same collection the backend's BlogPost model uses
const posts = mongoose.connection.collection('blogposts');
const words = (html = '') => html.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;

console.log(APPLY ? 'APPLY mode: writing changes\n' : 'DRY RUN: no changes will be written (use --apply)\n');

for (const post of BLOG_POSTS) {
  const existing = await posts.findOne({ slug: post.slug });
  const update = Object.fromEntries(FIELDS.map((f) => [f, post[f]]));

  if (existing) {
    console.log(`UPDATE ${post.slug}: ${words(existing.content)} -> ${words(post.content)} words`);
    if (APPLY) await posts.updateOne({ _id: existing._id }, { $set: update });
  } else {
    console.log(`INSERT ${post.slug}: ${words(post.content)} words`);
    if (APPLY) await posts.insertOne({ slug: post.slug, ...update, createdAt: new Date(), __v: 0 });
  }
}

await mongoose.disconnect();
console.log('\nDone.');
