export class BookDto {
  name: string;
  author: string;
}

export class GetBookDto extends BookDto {
  id: number;
}
export class CreateBookDto extends BookDto {
  id: number;
}
