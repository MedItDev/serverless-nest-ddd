import { ISpecification } from './ISpecification';

export abstract class CompositeSpecification<T> implements ISpecification<T> {
  abstract isSatisfiedBy(t: T): boolean;

  and(specification: ISpecification<T>): ISpecification<T> {
    return new AndSpecification(this, specification);
  }

  not(): ISpecification<T> {
    return new NotSpecification(this);
  }

  or(specification: ISpecification<T>): ISpecification<T> {
    return new OrSpecification(this, specification);
  }
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private readonly pLeft: ISpecification<T>,
    private readonly pRight: ISpecification<T>,
  ) {
    super();
  }

  isSatisfiedBy(t: T): boolean {
    return this.pLeft.isSatisfiedBy(t) && this.pRight.isSatisfiedBy(t);
  }
}

export class NotSpecification<T> extends CompositeSpecification<T> {
  constructor(private readonly specification: ISpecification<T>) {
    super();
  }

  isSatisfiedBy(t: T): boolean {
    return !this.specification.isSatisfiedBy(t);
  }
}

export class OrSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private readonly pLeft: ISpecification<T>,
    private readonly pRight: ISpecification<T>,
  ) {
    super();
  }

  isSatisfiedBy(t: T): boolean {
    return this.pLeft.isSatisfiedBy(t) || this.pRight.isSatisfiedBy(t);
  }
}
