import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, GetBookDto } from './dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): GetBookDto[] {
    return this.booksService.getBooks();
  }

  @Get(':bookId')
  getBookByID(@Param('bookId') id: number): GetBookDto {
    return this.booksService.getBookById(id);
  }

  @Post()
  createBook(@Body() req): CreateBookDto {
    return this.booksService.createBook(req);
  }

  @Put(':bookId')
  updateBookById(@Param('bookId') id: number, @Body() req): string {
    return this.booksService.updateBookById(id, req);
  }

  @Delete(':bookId')
  deleteBookById(@Param('bookId') id: number): string {
    return `Delete ${id}`;
  }
}
