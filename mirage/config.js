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

  this.get('/sections/:id', (schema, request) => {
    let sectionId = request.params.id;
    let section = schema.sections.find(sectionId);

    return {
      id: section.id,
      data: {
        type: 'section',
        attributes: section,
      },
    };
  });

  this.patch('/sections/:id', (schema, request) => {
    let sectionId = request.params.id;
    let attrs = JSON.parse(request.requestBody);
    let section = schema.sections.find(sectionId);
    section.update(attrs);
    saveMirageState(schema.db.sections);
    return section.attrs;
  });

  this.del('/sections/:id', (schema, request) => {
    let sectionId = request.params.id;
    let section = schema.sections.find(sectionId);
    if (section) {
      section.destroy();
      saveMirageState(schema.db.sections);
      return { message: 'Section deleted successfully.' };
    } else {
      return new Response(404, {}, { error: 'Section not found.' });
    }
  });

  this.post('/sections/', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    schema.sections.create(attrs);
    saveMirageState(schema.db.sections);
    return attrs;
  });

  // Function to save Mirage database state to local storage to make it persistent
  function saveMirageState(schemaDb) {
    let mirageState = JSON.stringify(schemaDb);
    localStorage.setItem('schemaDb', mirageState);
  }

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
