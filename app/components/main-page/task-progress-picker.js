import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TaskProgressPickerComponent extends Component {
  //This is for the Progress Choice
  //TODO Understand why i have to reassign to var and can't use it as this.progressState
  currProgressState = this.args.progressState || '';

  get options(){
    const defaultArray = [
      { label: 'In Progress', value: 'inProgress' },
      { label: 'Completed', value: 'completed' },
      { label: 'Not Started', value: 'notStarted' },
      { label: 'Released', value: 'released' },
    ];

    if(this.currProgressState === '')
      return [{label: 'Everything', value: 'everything'}, ...defaultArray]

    return defaultArray;
  }
  @action
  selectOption(event) {
    this.args.onChange(event.target.value);
  }
}
