import { useMutation } from '@tanstack/react-query';
import { BookInfos } from '../models/Book';
import APIClient from '../services/api-client';


const useAddBook = () => {
  const apiClient = new APIClient<BookInfos>('/api/book');
  return useMutation({
    mutationFn: (book:BookInfos)=> apiClient.post(book),
    onSuccess:(savedBook)=> savedBook,
  })

};

export default useAddBook;
