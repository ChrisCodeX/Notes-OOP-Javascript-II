const array = [5, 6, 7, 8];

function recursiva(array) {
  if (array.length != 0) {
    console.log(array[0]);
    array.shift();
    return recursiva(array);
  }
}
