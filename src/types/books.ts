export type IBook = {
  authors: string[];
  title: string;
  description?: string;
  pageCount?: number;
  category?: string;
  imageUrl?: string;
  language?: string;
  isbn10?: string;
  isbn13?: string;
  publisher?: string;
  published?: string;
  id: string;
};

export interface IBooksData {
  data: IBook[];
  pages: number;
  totalPages: number;
  totalItems: number;
}
