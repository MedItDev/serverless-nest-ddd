import { Response } from './Response';
import { HttpException, HttpStatus } from '@nestjs/common';

export class Exception extends Response {
  constructor(error: unknown) {
    error instanceof HttpException
      ? super(JSON.stringify(error.getResponse()), error.getStatus())
      : super(JSON.stringify(error), HttpStatus.BAD_REQUEST);
  }
}
