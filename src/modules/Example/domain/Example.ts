import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { Customer } from './Customer';
import { UniqueEntityId } from '../../../core/domain/UniqueEntityId';
import { IPolicyRepo } from '../../../core/domain/policy/IPolicyRepo';
import { Courtesy } from './Courtesy';
import { FullPerson } from './FullPerson';

/**
 * @description Agregat może składać się ze wszystkich "building block" DDD, prócz jednego samego siebie.
 * Jako elementów staramy nie używać  prymitiwów wzamian opakowujemy je w Value Object, nadające im znaczenie biznesowe
 * Dostęp po poszczególnych składaowych Agregatu odbywa się tylko przez jego korzeń (hermetyzacja).
 */
export type TExampleProps = {
  customer: Customer;
  sexPolicyRepo: IPolicyRepo<Example>;
};

export class Example extends AggregateRoot<TExampleProps> {
  private _courtesy?: Courtesy;

  override get id(): UniqueEntityId {
    return this._id;
  }

  /**
   * @description Aby zachować ścisłą enkapsulacje aggregatu, w tym przypadku stosujemy prywatny konstruktor oraz
   * metodę wytwórzczą. Można również zastosować wzorzec Fabryki abstakcyjnej.
   * Na poziomie zagadnień DDD jest to Fabryka, która ma za zadanie zbudować Agregat z zwalidowanych półproduktów,
   * a więc istniejący agaregat jest zawsze poprawny
   */
  private constructor(props: TExampleProps, id?: UniqueEntityId) {
    super(props, id);

    this.props.sexPolicyRepo.policies.forEach(policy => {
      policy.apply(this);
    });
  }

  public static create(props: TExampleProps, id?: UniqueEntityId): Example {
    return new Example(props, id);
  }

  public set courtesy(data: Courtesy) {
    this._courtesy = data;
  }

  /**
   * @description Jest to przykład niemutowalnej projekcji (Value Object),
   * stosuję się to jeżeli wewnętrzy stan agregatu jest niestabilny i ulega zmianą.
   * Jest to nic innego jak "Adapter" mapujący wewnętrzny stan agregatu na świat zewnętrzny (Zewnętrzny Interfejs).
   * Jeżeli nastąpi jakakolwiek zmianna w Agregacie to zmianny musimy dokonać tylko tutaj.
   */
  public fullPerson(): FullPerson {
    const { sex, surname, name } = this.props.customer.value;

    return FullPerson.create({
      title: this._courtesy?.value.title || 'Mx',
      sex,
      surname,
      name,
    });
  }
}
