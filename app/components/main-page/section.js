import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MainPageSectionComponent extends Component {
  @tracked isAdding = false
  @tracked foundSectionItems = this.args.section.items;
  @tracked inputValue = '';

  @action toggleAddition(boolean) {
    this.isAdding = boolean;
  }

  @action addTicket(){
    //Not added a description so we won't safe
    if(this.inputValue === '')
      return;

    console.log(this.inputValue);

    this.foundSectionItems = [...this.foundSectionItems, {
      title: this.inputValue,
      state: 'inProgress'
    }]

    //Close the Addition Part
    this.isAdding = false;
  }

}
