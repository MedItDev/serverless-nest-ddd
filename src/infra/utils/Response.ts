import { HttpStatus } from '@nestjs/common';

export abstract class Response {
  protected constructor(
    public readonly body: string,
    public readonly statusCode: HttpStatus,
  ) {}
}

export class Ok<T> extends Response {
  constructor(data?: T) {
    super(JSON.stringify(data || 'ok'), HttpStatus.OK);
  }
}
