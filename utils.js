function generateRandomNumber(){
  return Math.floor(Math.random() * 100) +1;
}
function greetings(name){
  return `Hello ${name}`;
}

module.exports={
  generateRandomNumber,
  greetings
  
}