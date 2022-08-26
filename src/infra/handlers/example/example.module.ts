import { ExampleService } from './example.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ExampleService],
  exports: [ExampleService],
})
export class ExampleModule {}
