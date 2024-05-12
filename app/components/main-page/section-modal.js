import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class MainPageSectionModalComponent extends Component {
  @tracked titleEdit = false;
  @tracked progressEdit = false;
  @tracked descriptionEdit = false;

  @tracked title = this.args.data.taskItem.title;
  @tracked progress = this.args.data.taskItem.state;
  @tracked description = this.args.data.taskItem.description || 'Enter description';
  @service requests;

  @action toggleTitleEdit() {
    this.titleEdit = true;
  }

  @action toggleProgressEdit() {
    this.progressEdit = true;
  }

  @action toggleDescriptionEdit() {
    this.descriptionEdit = true;
  }

  @action updateTitle(event) {
    this.titleEdit = false;
    console.log(this.title,this.args.data.taskItem.title)
    if (event.target.value === this.args.data.taskItem.title) return;

    this.title = event.target.value;
    this.args.data.taskItem.title = this.title;
    this.args.data.updateCallBack();
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }

  @action handleProgressChange(newProgressValue) {
    this.progressEdit = false;

    if (this.progress === newProgressValue) return;

    this.progress = newProgressValue;
    this.args.data.taskItem.state = this.progress;
    this.args.data.updateCallBack();
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }

  @action updateDescription(event) {
    this.descriptionEdit = false;
    if (event.target.value === this.args.data.taskItem.description) return;

    console.log('Updating description');
    this.description = event.target.value || 'Enter Description';
    this.args.data.taskItem.description = event.target.value;
    this.requests.updateTask(this.args.data.taskItem, this.args.data.sectionId);
  }

  @action
  removeItem() {
    this.args.close();
    this.args.data.deleteTaskCallBack(this.args.data.taskItem.id);
  }

}
