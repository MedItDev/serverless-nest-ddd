import { IUseCase } from '../../../core/domain/IUseCase';
import { CreateExampleDTO } from './createExampleDTO';

export class CreateExampleUseCase implements IUseCase<CreateExampleDTO, void> {
  /**
   *
   * @param request
   * @description odnosząc się do dostępnych sposobów implementacji podejścia DDD i CQRS, tą warstwę uznaje się za poziom aplikacji
   */
  async execute(request: CreateExampleDTO): Promise<void> {
    console.log(request);
  }
}
