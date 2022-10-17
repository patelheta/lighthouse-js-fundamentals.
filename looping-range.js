// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

const range = function (start, end, step) {
  let result = [];
  if (start == undefined || end == undefined || step == undefined) {
    return result;
  }
  if (start > end || step <= 0) {
    return result;
  }
  for (let i = start; i <= end; i = i + step) {
    result.push(i);
  }
  return result;
};

console.log(range(0, 10, ));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
