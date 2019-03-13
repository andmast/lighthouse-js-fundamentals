function range(start, end, step) {
  var walk = [];
  if (start !== undefined &&  end !== undefined && step !== undefined && start < end && step >= 0 ) {
    for (var i = start; i <= end; i += step) {
      walk.push(i);
    }
    return walk;
  } else {
    return [];
  }
}


console.log("answers1")
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log("answers2")
console.log(range(1,12,"a"));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));