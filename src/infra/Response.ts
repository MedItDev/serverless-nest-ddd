import { HttpStatus } from '@nestjs/common';

abstract class Response<T> {
  protected constructor(
    private readonly data: T,
    private readonly statusCode: HttpStatus,
  ) {}

  get body() {
    return { statusCode: this.statusCode, body: JSON.stringify(this.data) };
  }
}

export class BadRequest<T> extends Response<T> {
  constructor(data: T) {
    super(data, HttpStatus.BAD_REQUEST);
  }
}

export class NotFound<T> extends Response<T> {
  constructor(data: T) {
    super(data, HttpStatus.NOT_FOUND);
  }
}

export class Ok<T> extends Response<T> {
  constructor(data: T) {
    super(data, HttpStatus.OK);
  }
}
