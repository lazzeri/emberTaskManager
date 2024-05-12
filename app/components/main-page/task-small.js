import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import MainPageSectionModalComponent from './section-modal';

export default class MainPageTaskSmallComponent extends Component {
  @service modals;
  @tracked title = this.args.item.title;
  @tracked state = this.args.item.state;

  @action
  handleOpenModal() {
    //We use a callback to update the small task, because @tracked won't trigger
    const callBack = () => {
      this.title = this.args.item.title;
      console.log(this.args.item);
      this.state = this.args.item.state;
    };

    this.modals.open(MainPageSectionModalComponent, {
      callBack,
      taskItem: this.args.item,
      sectionId: this.args.sectionId,
    });
  }
}
