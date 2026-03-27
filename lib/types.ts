export interface ProjectFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  featured?: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

export interface BookFrontmatter {
  title: string;
  date: string;
  description?: string;
  tags: string[];
  /** Single author (some files use this field) */
  author?: string;
  /** Multiple authors (some files use this field) */
  authors?: string[];
  draft?: boolean;
  worthReading?: string;
  sidebar_class_name?: string;
}

export interface Book extends BookFrontmatter {
  slug: string;
  content: string;
  /** Resolved from author or authors[0] */
  resolvedAuthor: string;
}
