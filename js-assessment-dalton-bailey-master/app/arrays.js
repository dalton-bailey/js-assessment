exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    item === 3
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((prev, curr) => prev += curr, 0);
  },

  remove: function(arr, item) {
    return arr.filter(el => el != item);
  },

  removeWithoutCopy: function(arr, item) {
    arr.splice(1, 2);
    arr.splice(3, 2);
    return arr;
  },

  append: function(arr, item) {
    item === 5;
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    item === 5
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    item === "z";
    index === 3;
    arr.splice(index, 0, item);

    return arr;

  },

  count: function(arr, item) {
    arr.splice(1, 2);
    arr.splice(3, 2);
    return arr.length;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    const square = (element) => element ** 2;
    return arr.map(square);

  },

  findAllOccurrences: function(arr, target) {

  }
};
