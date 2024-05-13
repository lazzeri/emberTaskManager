import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked query = '';
  @tracked progressFilter = 'everything';

  progress = 'completed';

  @action handleProgressFilterChange(element){
    this.progressFilter = element;
  }
}
