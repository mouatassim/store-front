import { useMutation } from '@tanstack/react-query';
import { BookInfos } from '../models/Book';
import APIClient from '../services/api-client';
import useBookContext from './useBookContext';

const useAddBook = () => {
  const {addBook} = useBookContext()
  const apiClient = new APIClient<BookInfos>('/api/books');
  return useMutation({
    mutationFn: (book:BookInfos)=> apiClient.post(book),
    onSuccess:(savedBook)=> addBook(savedBook) })

};

export default useAddBook;
