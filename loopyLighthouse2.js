function loopyLighthouse(range, multiples, words){
  for ( var i = range[0]; i <= range[range.length - 1] ; i ++){
    if (i  % multiples[0] === 0 && i % multiples[multiples.length - 1] === 0){
      console.log("BattyBeacon")
    } else if (i % multiples[multiples.length - 1] === 0){
      console.log("Beacon")
    } else if (i % multiples[0] === 0){
      console.log("Batty")
    } else {
      console.log(i)
    }
  }

}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);