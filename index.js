function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<= 400){
  return `This one is on me!`;
  } 
  else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } 
  else if (distance > 2500) {
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet());

function ternaryCheckCity(city){
return city==='NYC'? 'Ok, sounds good.' : 'No go.' ;  
}
console.log(ternaryCheckCity (Pittsburgh));

function switchOnCharmFromTip(tip){
 switch (tip){
  case tip ='generous':
    return 'Thank you so much.'
  break;
  case tip = 'not as generous':
    return 'Thank you.'
  break; 
  default :
    return 'Bye.'
    break;
 }
}
console.log(switchOnCharmFromTip('thanks for everything'))