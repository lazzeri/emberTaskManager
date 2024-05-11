export default function (server) {

  const storedData = loadMirageState();

  server.db.loadData({
    sections: storedData,
  });
}


function loadMirageState() {
  let mirageState = localStorage.getItem('schemaDb');
  return JSON.parse(mirageState);
}
