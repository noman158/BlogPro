export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'author' | 'reader';
  avatar?: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  summary: string;
  slug: string;
  featuredImage?: string;
  authorId: string;
  author: User;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
  author: User;
  parentId?: string;
  createdAt: string;
}