import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import type { Project, BlogPost, Book } from './types';

export async function markdownToHtml(markdown: string): Promise<string> {
  // Strip MDX-specific constructs: import/export lines and custom JSX components
  const cleaned = markdown
    .replace(/^(import|export)\s+.+$/gm, '')
    .replace(/<[A-Z][A-Za-z]*\s*\/>/g, '') // self-closing JSX components like <FlowTracker />
    .replace(/<[A-Z][A-Za-z]*[^>]*>[\s\S]*?<\/[A-Z][A-Za-z]*>/g, '') // JSX blocks
    .trim();

  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(cleaned);

  return result.toString();
}

const contentRoot = path.join(process.cwd(), 'content');

function readDir(dir: string): string[] {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

function slugFromFile(filename: string): string {
  return filename.replace(/\.(md|mdx)$/, '');
}

function stripDocusaurusImports(content: string): string {
  // Remove Docusaurus-specific import statements and JSX components
  return content
    .replace(/^import\s+\w+\s+from\s+['"]@site\/[^'"]+['"]\s*;?\s*$/gm, '')
    .replace(/<BookReview[^/]*\/>/g, '')
    .trim();
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export function getProjects(): Project[] {
  const dir = path.join(contentRoot, 'projects');
  const files = readDir(dir);

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as Project;

      return {
        slug: slugFromFile(filename),
        title: fm.title ?? '',
        date: fm.date ?? '',
        description: fm.description ?? '',
        tags: fm.tags ?? [],
        github: fm.github,
        featured: fm.featured ?? false,
        content,
      } satisfies Project;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProject(slug: string): Project | null {
  const dir = path.join(contentRoot, 'projects');
  const extensions = ['.mdx', '.md'];

  for (const ext of extensions) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as Project;

      return {
        slug,
        title: fm.title ?? '',
        date: fm.date ?? '',
        description: fm.description ?? '',
        tags: fm.tags ?? [],
        github: fm.github,
        featured: fm.featured ?? false,
        content,
      };
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export function getBlogPosts(): BlogPost[] {
  const dir = path.join(contentRoot, 'blog');
  const files = readDir(dir);

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as BlogPost;

      return {
        slug: slugFromFile(filename),
        title: fm.title ?? '',
        date: fm.date ?? '',
        description: fm.description ?? '',
        tags: fm.tags ?? [],
        content,
      } satisfies BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const dir = path.join(contentRoot, 'blog');
  const extensions = ['.mdx', '.md'];

  for (const ext of extensions) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as BlogPost;

      return {
        slug,
        title: fm.title ?? '',
        date: fm.date ?? '',
        description: fm.description ?? '',
        tags: fm.tags ?? [],
        content,
      };
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Books
// ---------------------------------------------------------------------------

export function getBooks(): Book[] {
  const dir = path.join(contentRoot, 'books');
  const files = readDir(dir);

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as Book;

      const resolvedAuthor =
        fm.author ?? (Array.isArray(fm.authors) ? fm.authors[0] : '') ?? '';

      return {
        slug: slugFromFile(filename),
        title: fm.title ?? '',
        date: String(fm.date ?? ''),
        description: fm.description ?? '',
        tags: Array.isArray(fm.tags) ? fm.tags : fm.tags ? [fm.tags as unknown as string] : [],
        author: fm.author,
        authors: fm.authors,
        draft: fm.draft,
        worthReading: fm.worthReading,
        resolvedAuthor,
        content: stripDocusaurusImports(content),
      } satisfies Book;
    })
    .filter((b) => !b.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBook(slug: string): Book | null {
  const dir = path.join(contentRoot, 'books');
  const extensions = ['.mdx', '.md'];

  for (const ext of extensions) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as Book;

      const resolvedAuthor =
        fm.author ?? (Array.isArray(fm.authors) ? fm.authors[0] : '') ?? '';

      return {
        slug,
        title: fm.title ?? '',
        date: String(fm.date ?? ''),
        description: fm.description ?? '',
        tags: Array.isArray(fm.tags) ? fm.tags : fm.tags ? [fm.tags as unknown as string] : [],
        author: fm.author,
        authors: fm.authors,
        draft: fm.draft,
        worthReading: fm.worthReading,
        resolvedAuthor,
        content: stripDocusaurusImports(content),
      };
    }
  }

  return null;
}
