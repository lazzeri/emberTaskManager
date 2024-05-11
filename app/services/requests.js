import Service from '@ember/service';
import { service } from '@ember/service';

export default class RequestsService extends Service
{
  @service store;

  async updateSection(newData,sectionId)
  {
    try {
      let sectionToUpdate = await this.store.peekRecord('section', sectionId);

      if(!sectionToUpdate)
        sectionToUpdate = await this.store.findRecord('section', sectionId);

      sectionToUpdate.items = newData;
      await sectionToUpdate.save();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }
}
