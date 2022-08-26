export interface ISpecification<T> {
  isSatisfiedBy(t: T): boolean;
  and(specification: ISpecification<T>): ISpecification<T>;
  or(specification: ISpecification<T>): ISpecification<T>;
  not(): ISpecification<T>;
}
