import { IPolicy } from './IPolicy';

export interface IPolicyRepo<T> {
  policies: Set<IPolicy<T>>;
}
