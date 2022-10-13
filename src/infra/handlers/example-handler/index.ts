import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { INestApplicationContext } from '@nestjs/common';
import { LambdaToWarm, THandlerFunc } from '../../utils/LambdaToWarm';
import { bootstrap } from '../../main';
import { LazyModuleLoader } from '@nestjs/core';

const ExampleHandler: THandlerFunc = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  //Lazy Loading Modules
  const { ExampleHandlerService } = await import('./example-handler.service');
  const { ExampleHandlerModule } = await import('./example-handler.module');

  const appContext: INestApplicationContext = await bootstrap();
  const lazyModuleLoader = appContext.get(LazyModuleLoader);

  const moduleRef = await lazyModuleLoader.load(() => ExampleHandlerModule);
  const lazyService = moduleRef.get(ExampleHandlerService);

  return await lazyService.handleExample(event, context);
};

export const exampleHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  return LambdaToWarm(event, context, ExampleHandler);
};
