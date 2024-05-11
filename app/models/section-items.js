import Model, { attr } from '@ember-data/model';

export default class SectionItemsModel extends Model {
  @attr title;
  @attr state;
}
