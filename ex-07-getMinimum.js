
// Part 07 : getMinimum()

// Write a function cthat will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).


var getMinimum = function(a, b, c, d){
   if (a < b && a < c && a < d){
      return a;
   }
   else if (b < a && b < c && b < d) {
      return b;
   }
   else if (c < a && c < b && c < d){
      return c;
   }
   else{return d;}
  }
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,12,-5) === -11 )
