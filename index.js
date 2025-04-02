// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let startIndex = 0;
  if (acc === undefined) {
    if (Array.isArray(collection)) {
      acc = collection[0];
      startIndex = 1;
    } else {
      const values = Object.values(collection);
      acc = values[0];
      startIndex = 1;
    }
  }
  
  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const values = Object.values(collection);
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
  }
  return acc;
}


function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n);
  }
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return array.slice().sort((a, b) => {
    const aValue = callback(a);
    const bValue = callback(b);
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (shallow) {
        newArr.push(...array[i]);
      } else {
        myFlatten(array[i], shallow, newArr);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Object Functions

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
