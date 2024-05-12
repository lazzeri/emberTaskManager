import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class MainPageSectionModalComponent extends Component {
  @tracked titleEdit = false;
  @tracked progressEdit = false;
  @tracked title = this.args.data.taskItem.title;
  @tracked progress = this.args.data.taskItem.state;
  @service requests;

  @action toggleTitleEdit() {
    this.titleEdit = true;
  }

  @action toggleProgressEdit() {
    this.progressEdit = true;
  }

  @action updateTitle(event) {
    this.titleEdit = false;

    if (this.title === this.args.data.taskItem.title) return;

    this.title = event.target.value;
    this.args.data.taskItem.title = this.title;
    this.args.data.callBack();
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }

  @action handleChoiceChange(newProgressValue) {
    this.progressEdit = false;

    if (this.progress === newProgressValue) return;

    this.progress = newProgressValue;
    this.args.data.taskItem.state = this.progress;
    this.args.data.callBack();
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }
}
