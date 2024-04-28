function makeIterable(from, to) {
  return {
    [Symbol.iterator]() {
      let current = from;
      const last = to;

      return {
        next() {
          if (current <= last) {
            return { done: false, value: current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

function* makeGenerator(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}