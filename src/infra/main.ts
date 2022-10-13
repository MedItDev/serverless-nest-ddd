import { NestFactory } from '@nestjs/core';
import { INestApplicationContext } from '@nestjs/common';
import { AppModule } from './app.module';
import { handler } from './utils/ErrorHandler';

let appContext: INestApplicationContext;

process.on('unhandledRejection', (reason: string) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  handler.handleError(error);
});

export async function bootstrap(): Promise<INestApplicationContext> {
  if (!appContext) {
    appContext = await NestFactory.createApplicationContext(AppModule);
  }

  return appContext;
}
