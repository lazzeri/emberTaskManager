import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MainPageTaskProgressComponent extends Component {
  get progressText() {
    switch (this.args.progressState) {
      case 'inProgress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'notStarted':
        return 'Not Started';
      case 'released':
        return 'Released';
      default:
        return 'ERROR';
    }
  }

  get progressClass() {
    switch (this.args.progressState) {
      case 'inProgress':
        return 'bg-yellow-200';
      case 'completed':
        return 'bg-green-200';
      case 'notStarted':
        return 'bg-red-200';
      case 'released':
        return 'bg-purple-200';
      default:
        return 'bg-default';
    }
  }
}
