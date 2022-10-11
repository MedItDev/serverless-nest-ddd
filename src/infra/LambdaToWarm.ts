import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { Ok } from './Response';

export type TPluginWarmupEvent = Readonly<{ source: string }>;

export type THandlerFunc = (
  event: APIGatewayProxyEvent,
  context: Context,
) => Promise<APIGatewayProxyResult>;

export const LambdaToWarm = async <T extends THandlerFunc>(
  event: APIGatewayProxyEvent | TPluginWarmupEvent,
  context: Context,
  func: T,
): Promise<APIGatewayProxyResult> => {
  if ('source' in event && event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!');
    /** Slightly delayed (25ms) response
     to ensure concurrent invocation */
    await new Promise(resolve =>
      setTimeout(
        resolve,
        process.env['slightlyDelay']
          ? parseInt(process.env['slightlyDelay'], 10)
          : 25,
      ),
    );

    return new Ok('Lambda is warm!').body;
  }

  return func(event as APIGatewayProxyEvent, context);
};
