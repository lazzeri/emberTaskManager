import Service, {service} from '@ember/service';

export default class RequestsService extends Service
{
  @service store;

  async updateSection(newData, sectionId)
  {
    try
    {
      let sectionToUpdate = await this.store.peekRecord('section', sectionId);

      if (!sectionToUpdate)
        sectionToUpdate = await this.store.findRecord('section', sectionId);

      sectionToUpdate.items = newData;
      await sectionToUpdate.save();
    } catch (error)
    {
      console.error('Error updating post:', error);
    }
  }

  async updateTask(updatedTask, sectionId)
  {
    try
    {
      let sectionToUpdate = await this.store.peekRecord('section', sectionId);

      if (!sectionToUpdate)
        sectionToUpdate = await this.store.findRecord('section', sectionId);

      //Update the Whole Section by matching the taskId
      sectionToUpdate.items = sectionToUpdate.items.map((elem) =>
      {
        //Update the one with the same id
        if (parseInt(elem.id) === parseInt(updatedTask.id)) return updatedTask;
        //Else just return the old one
        return elem;
      });

      await sectionToUpdate.save();
    } catch (error)
    {
      console.error('Error updating post:', error);
    }
  }

  async addSection(newData)
  {
    try
    {
      let newSection = this.store.createRecord('section', newData);
      newSection.save();
    } catch (e)
    {
      console.error('Error creating new section:', error);
    }
  }
}
