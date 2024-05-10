import Model from '@ember-data/model';

export default class SectionModel extends Model {
  @attr title;
  @attr index;
  @attr items;
}
