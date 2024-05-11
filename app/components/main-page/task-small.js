import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import MainPageSectionModalComponent from "./section-modal";

export default class MainPageTaskSmallComponent extends Component {
  @service modals;

  @action
  handleOpenModal() {
    console.log(this.args.item);
    this.modals.open(MainPageSectionModalComponent, this.args.item);
  }
}
