import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import {service} from '@ember/service';

export default class MainPageSectionComponent extends Component
{
  @service requests;
  @tracked isAdding = false;
  @tracked foundSectionItems = Array.isArray(this.args.section.items)
    ? this.args?.section?.items
    : [];
  @tracked inputValue = '';

  @action toggleAddition(boolean)
  {
    this.isAdding = boolean;
  }

  @action addTicket()
  {
    //Not added a description so we won't safe
    if (this.inputValue === '') return;

    this.foundSectionItems = [
      ...this.foundSectionItems,
      {
        title: this.inputValue,
        state: 'notStarted',
        id: 2
      },
    ];

    //Close the Addition Part
    this.isAdding = false;
    //Clear the input text
    this.inputValue = '';

    this.requests.updateSection(this.foundSectionItems, 1);
  }
}
