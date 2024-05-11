export default function (server) {
  server.db.loadData({
    sections: [
      {
        id: 1,
        title: 'Test',
        index: 0,
        items: [
          {
            title: 'Test Title',
            state: 'inProgress',
            id: 0
          },
          {
            title: 'Test Title2',
            state: 'completed',
            id: 1
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
    ],
  });
}
