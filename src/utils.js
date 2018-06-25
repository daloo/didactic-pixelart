const ids = {};

function getUniqueId() {
  let id;

  do {
    id = Math.random();
  } while (ids[id]);

  ids[id] = id;

  return id;
}

function freeId(id) {
  ids[id] = undefined;
}

export function timer(callback) {
  return function() {
    const id = getUniqueId();
    console.time(id);
    callback(...arguments);
    console.timeEnd(id);
    freeId(id);
  };
}
