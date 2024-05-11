export default function (server) {
  const storedData = loadMirageState();

  server.db.loadData({
    sections: storedData,
  });
}

function loadMirageState() {
  let mirageState = localStorage.getItem('schemaDb');
  if (!mirageState)
    return [
      {
        id: 1,
        title: 'Test',
        index: 0,
        items: [
          {
            title: 'Test Title',
            state: 'inProgress',
            id: 0,
          },
          {
            title: 'Test Title2',
            state: 'completed',
            id: 1,
          },
        ],
      },
      {
        id: 2,
        title: 'Test2',
        index: 1,
        items: {},
      },
      {
        id: 3,
        title: 'Test3',
        index: 2,
        items: {},
      },
    ];

  return JSON.parse(mirageState);
}
