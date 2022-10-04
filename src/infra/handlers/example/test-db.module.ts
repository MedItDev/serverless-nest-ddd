import { Module } from '@nestjs/common';
import { TestDbService } from './test-db.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [TestDbService],
  exports: [TestDbService],
})
export class TestDbModule {}
