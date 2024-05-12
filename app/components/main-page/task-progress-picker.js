import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TaskProgressPickerComponent extends Component {
  //This is for the Progress Choice
  //TODO Understand why i have to reassign to var and can't use it as this.progressState
  currProgressState = this.args.progressState;

  options = [
    { label: 'In Progress', value: 'inProgress' },
    { label: 'Completed', value: 'completed' },
    { label: 'Not Started', value: 'notStarted' },
    { label: 'Released', value: 'released' },
  ];

  @action
  selectOption(event) {
    this.args.onChange(event.target.value);
  }
}
