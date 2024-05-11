import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = 'api';

  this.get('/sections', (schema, request) => {
    return schema.db.sections;
  });

  this.get('/section-items/:id', (schema, request) => {
    let sectionId = request.params.id;
    let section = schema.sections.find(sectionId);

    return {
      id: section.id,
      data: {
        type: 'sectionItems',
        attributes: section
      }
    };
  });

  this.patch('/section-items/:id', (schema, request) => {
    let sectionId = request.params.id;
    console.log('req',request);
    let requestBody = JSON.parse(request.requestBody);
    let section = schema.sections.find(sectionId);
    console.log('Section before', section);
    console.log('reqBody',requestBody);
    section.update(requestBody);
    console.log('Section after', section);
    return {
      id: sectionId,
      data: {
        type: 'sectionItems',
        attributes: section
      }
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
}
