export default function (server) {
  const storedData = loadMirageState();

  server.db.loadData({
    sections: storedData,
  });
}

function loadMirageState() {
  let mirageState = localStorage.getItem('schemaDb');
  if (!mirageState)
    return defaultMirageState;

  return JSON.parse(mirageState);
}


const defaultMirageState =  [
  {
    id: 1,
    title: 'Test',
    items: [
      {
        title: 'Test Title',
        state: 'inProgress',
        id: 1,
        description: '',
      },
      {
        title: 'Test Title2',
        state: 'completed',
        id: 2,
        description: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Test2',
    items: []
,
  },
  {
    id: 3,
    title: 'Test3',
    items: [],
  },
];
