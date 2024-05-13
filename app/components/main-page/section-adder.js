import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SectionAdderComponent extends Component {
  @service requests;
  @tracked foundSections = Array.isArray(this.args.sections)
    ? this.args?.sections
    : [];
  @tracked inputValue = '';
  @tracked isAdding = false;
  @service frontendHelpers;

  @action toggleAddition(boolean) {
    this.isAdding = boolean;
  }

  @action addSection() {
    //Not added a description so we won't safe
    if (this.inputValue === '') return;

    const newSection = {
      title: this.inputValue,
      id: this.frontendHelpers.generateUuidv4(),
      items: [],
    };

    //Close the Addition Part
    this.isAdding = false;
    //Clear the input text
    this.inputValue = '';
    //Update the Database
    this.requests.addSection(newSection);
  }
}
