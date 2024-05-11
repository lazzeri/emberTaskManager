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

  @action toggleAddition(boolean) {
    this.isAdding = boolean;
  }

  @action addSection() {
    //Not added a description so we won't safe
    if (this.inputValue === '') return;

    const newSectionId = this.foundSections.length + 1;
    const newSection = {
      title: this.inputValue,
      index: newSectionId,
      id: newSectionId,
      items: [],
    };

    this.foundSections = [...this.foundSections, newSection];

    //Close the Addition Part
    this.isAdding = false;
    //Clear the input text
    this.inputValue = '';
    //Update the Database
    this.requests.addSection(newSection);
  }
}
