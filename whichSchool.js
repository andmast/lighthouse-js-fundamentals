function whichSchool(age) {
  // Your code in here ...

  // Checks if Age is less than 13 years old
  if (age < 13) {
    return "Elementary School";
  }
  // Checks if Age is 13 years old or less than or equal to 18
  else if (age >= 13 && age <= 18){
    return "Secondary School";
  }
  // all other results
  else {
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

