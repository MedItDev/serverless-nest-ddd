export interface IPolicy<T> {
  apply(t: T): T;
}
