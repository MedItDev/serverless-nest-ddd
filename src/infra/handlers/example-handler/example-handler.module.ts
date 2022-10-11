import { Module } from '@nestjs/common';
import { ExampleHandlerService } from './example-handler.service';

@Module({
  providers: [ExampleHandlerService],
})
export class ExampleHandlerModule {}
