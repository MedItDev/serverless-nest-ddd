import { IDomainEvent } from './IDomainEvent';

export interface IDomainHandler {
    handle(event: IDomainEvent): Promise<void>;
}
