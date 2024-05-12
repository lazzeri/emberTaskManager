import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {service} from '@ember/service';

export default class MainPageSectionModalComponent extends Component
{
  @tracked titleEdit = false;
  @tracked title = this.args.data.taskItem.title;
  @service requests;

  @action toggleTitleEdit(){
    this.titleEdit = true;
  }

  @action updateTitle(event){
    this.titleEdit = false;
    this.title = event.target.value;
    this.args.data.taskItem.title = this.title;
    this.args.data.callBack();
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }

  //If i would want to use the item, I could do like this.
  //item = this.args.item;

}
