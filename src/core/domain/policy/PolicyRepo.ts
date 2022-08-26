import { IPolicyRepo } from './IPolicyRepo';
import { IPolicy } from './IPolicy';

export abstract class PolicyRepo<T> implements IPolicyRepo<T> {
  public policies: Set<IPolicy<T>>;

  protected constructor(policies: Array<IPolicy<T>>) {
    this.policies = new Set(policies);
  }
}
