import { Mapper } from '../../../core/infra/Mapper';
import { IRawExample } from '../repository/example.repo';
import { Customer } from '../domain/Customer';

export class CustomerMapper extends Mapper<Customer, IRawExample> {
  toDomain(raw: IRawExample): Customer {
    return Customer.create({
      sex: raw.sex,
      name: raw.name,
      surname: raw.surname,
    });
  }
}
