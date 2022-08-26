import { IPolicy } from './IPolicy';
import { CompositeSpecification } from '../specification/CompositeSpecification';

export abstract class Policy<T> implements IPolicy<T> {
  protected constructor(protected specification: CompositeSpecification<T>) {}

  abstract apply(_t: T): T;
}
