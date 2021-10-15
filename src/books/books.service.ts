import { HttpException, Injectable } from '@nestjs/common';
import db from '../data';
import { CreateBookDto, GetBookDto, BookDto } from './dto';

@Injectable()
export class BooksService {
  private data = db;

  getBooks(): GetBookDto[] {
    return this.data;
  }

  getBookById(bookId: number): GetBookDto {
    return this.data.find((book) => book.id === bookId);
  }

  createBook(payload: BookDto): CreateBookDto {
    const newBook = {
      id: this.data.length + 1,
      ...payload,
    };

    this.data.push(newBook);

    return newBook;
  }

  updateBookById(bookId: number, payload: BookDto): string {
    const book = this.data.find((book) => book.id === bookId);
    if (!book) {
      throw new HttpException(`Book with id ${bookId} is not found`, 404);
    }
    const index = this.data.indexOf(book);
    this.data[index] = {
      id: bookId,
      ...payload,
    };

    return `The book with id ${bookId} has been updated`;
  }

  deleteBookById(bookId: number): string {
    this.data = this.data.filter((book) => book.id !== bookId);
    return `The book with id ${bookId} has been deleted`;
  }
}
