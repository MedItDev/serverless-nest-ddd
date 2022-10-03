import { HttpStatus } from '@nestjs/common';

export class Response<T> {
  constructor(
    private readonly data: T,
    private readonly statusCode = HttpStatus.OK,
  ) {}

  get response() {
    return { statusCode: this.statusCode, body: JSON.stringify(this.data) };
  }
}
