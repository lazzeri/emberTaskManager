import Service from '@ember/service';
import { service } from '@ember/service';

export default class RequestsService extends Service
{
  @service store;

  updateSection(newData,sectionId)
  {
    try{
      this.store.findRecord('sectionItems',sectionId).then(function(sectionItems) {
        console.log('sec before', sectionItems);
        sectionItems.items = newData;
        console.log('sec later', sectionItems.items);
        sectionItems.save();
      });
    }catch (e)
    {
      console.log('Hm', e);
    }
  }
}
