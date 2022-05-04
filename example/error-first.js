function strictAddition(x, y, callback) {
  if (typeof x !== 'number') {
    callback(new Error('First argument is not a number'));
    return;
  }

  if (typeof y !== 'number') {
    callback(new Error('Second argument is not a number'));
    return;
  }

  const result = x + y;
  setTimeout(function() {
    callback(null, result);
  }, 3000);
}

function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
}

// Example
strictAddition(1, 2, callback);
strictAddition('1', 2, callback);
strictAddition(1, '2', callback);
