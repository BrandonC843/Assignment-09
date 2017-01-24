
// Part 08: getSeasonForMonth()

// Write a function called getSeasonForMonth() that accepts
// an integer as an argument and returns the season of year.
//   e.g. getSeasonForMonth(6) => 'summer'

// The function should be built to accept integer values
// of 1-12.
//
// It should also return false if the function is given
// bad input.
var getSeasonForMonth = function(number){
   if ((typeof number !== 'number') || (number < 1) || (number > 12)) {
   return false;
}else if (number === 1){
   return 'winter';
}else if (number === 2){
   return 'winter';
}else if (number === 3){
   return 'spring';
}else if (number === 4){
   return 'spring';
}else if (number === 5){
   return 'spring';
}else if (number === 6){
   return 'summer';
}else if (number === 7){
   return 'summer';
}else if (number === 8){
   return 'summer';
}else if (number === 9){
   return 'fall';
}else if (number === 10){
   return 'fall';
}else if (number === 11){
   return 'fall';
}else {
   return 'winter';
}
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth("June") === false)
