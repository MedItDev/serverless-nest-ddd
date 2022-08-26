import { UniqueEntityId } from './UniqueEntityId';

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId;
  public readonly props: T;

  protected constructor(props: T, id?: UniqueEntityId) {
    this._id = id ? id : new UniqueEntityId();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
