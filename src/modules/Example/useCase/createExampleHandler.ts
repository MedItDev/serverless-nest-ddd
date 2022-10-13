import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { BaseHandler } from '../../../core/infra/BaseHandler';
import { MissingBodyParamsException } from './createExampleError';
import { CreateExampleUseCase } from './createExampleUseCase';
import { Ok } from '../../../infra/utils/Response';

export class CreatePosOrderHandler extends BaseHandler<
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult
> {
  constructor(private readonly useCase: CreateExampleUseCase) {
    super();
  }

  /**
   * @Description metoda ta ma za zadanie zwalidować poprawność danych wchodzących (nie poprawność biznesową) oraz wywołać dany przypadek użycia.
   * */
  protected async executeImpl(): Promise<APIGatewayProxyResult> {
    if (!this.event?.body) throw new MissingBodyParamsException();

    try {
      await this.useCase.execute(JSON.parse(this.event.body));

      return new Ok();
    } catch (err: unknown) {
      throw err;
    }
  }
}
