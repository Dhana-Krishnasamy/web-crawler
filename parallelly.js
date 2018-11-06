const parallelly = (target, queueLength, concurrencyLevel) => {
  return new Promise((resolve, reject) => {
    (async function next(i) {
      const tasks = [];
      for (let j = 0; j < concurrencyLevel && j < queueLength; j++) {
        if (i + 1 <= queueLength) tasks.push(target(i + j));
      }
      Promise.all(tasks)
        .then(_ => {
          if (i + concurrencyLevel < queueLength) next(i + concurrencyLevel);
          else {
            resolve();
          }
        })
        .catch(err => {
          reject({
            error: err,
            message: "You should handle the failures in your target"
          });
        });
    })(0);
  });
};

module.exports = parallelly;
