
// Part 11: calcSpeedTicket()

// Write a function that calculates a speeding ticket:
// The function should take 3 arguments:
//    (1) the speedLimit
//    (2) the user's clocked speed
//    (3) a boolean value for whether the user was in
//        a school-zone or work-zone

// fine schedule:
//   less than speed limit + 5mph : $0
//   less than 20 mph             : $150
//   20 mph or more               : $250
//

// Examples:
//  calcSpeedTicket(20, 30, true)
//  => 300

//  calcSpeedTicket(20, 30, true)
//  => 150


var calcSpeedTicket = function(input1, input2, input3){
   if (input2 - input1 <= 5){
   return (0);
}else if ((input2 - input1 < 20) && (input3 === true)){
   return(150 * 2);
}else if((input2 - input1 < 20) && (input3 === false)){
   return (150);
}else if ((input1 -input2 >= 20)&&(input3 ===true)){
   return(250 *2);
}else if ((input1 -input2 >= 20)&&(input3 ===false)){
   return(250);
}
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )

console.assert( calcSpeedTicket(25, 29, true) === 0  )
