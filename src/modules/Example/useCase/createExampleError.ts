import { BadRequestException, HttpStatus } from '@nestjs/common';

export class MissingBodyParamsException extends BadRequestException {
  constructor(message?: string) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'missingBodyParams',
      message: message || 'Missing body parameters!',
    });
  }
}
