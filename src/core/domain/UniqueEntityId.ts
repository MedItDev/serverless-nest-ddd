import { randomUUID } from 'crypto';

export type TUniqueEntityValue = string | number;

export class UniqueEntityId {
  private readonly value: TUniqueEntityValue;

  constructor(id?: string | number) {
    this.value = id || randomUUID();
  }

  equals(id?: UniqueEntityId): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toValue() === this.value;
  }

  toString(): string {
    return String(this.value);
  }

  /**
   * Return raw value of identifier
   */

  toValue(): TUniqueEntityValue {
    return this.value;
  }
}
