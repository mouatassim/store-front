import Author from "./Author";
import Genre from "./Genre";

export interface BookInfos {
  book_id?: number;
  ISBN?: string;
  image_link: File | null;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  author: Author;
  country_id: string;
  genres: Genre[];
}
