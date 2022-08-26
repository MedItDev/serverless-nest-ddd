import { UniqueEntityId } from './UniqueEntityId';
import { Entity } from './Entity';

export abstract class AggregateRoot<T> extends Entity<T> {
  get id(): UniqueEntityId {
    return this._id;
  }
}
