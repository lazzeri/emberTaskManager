import Component from '@glimmer/component';

export default class MainPageSectionsContainerComponent extends Component
{
  get filteredSections()
  {
    let {sections, query,progressFilter} = this.args;
    console.log(query,progressFilter);

    const filterResultForTaskTitleAndDescription = filterByTaskTitleAndDescription(sections,query);
    return filterByProgress(filterResultForTaskTitleAndDescription,progressFilter);

    function filterByTaskTitleAndDescription(sections,query){
      if (!query) return sections;

      return sections.map(section =>
      {
        const filteredItems = section.items.filter(item =>
        {
          return item.title.includes(query) || item.description.includes(query);
        });

        //We can't use the spread to get all items here, because the object is a Model rather than a normal object
        //TODO How couold this be made better, because if Section obj chagnes, we have to update this too
        return {
          title: section.title,
          id: section.id,
          items: filteredItems
        };
      }).filter(section => section.items.length > 0);
    }
    function filterByProgress(filteredSections, progressFilter){
      if(progressFilter === 'everything')
        return filteredSections;

      return filteredSections.map(section =>
      {
        const filteredItems = section.items.filter(item =>
        {
          return item.progress === progressFilter;
        });

        return {
          title: section.title,
          id: section.id,
          items: filteredItems
        };
      }).filter(section => section.items.length > 0);
    }
  }


}
