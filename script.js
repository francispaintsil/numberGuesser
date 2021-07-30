let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
 let  x = Math.floor(Math.random()*10)

 return x;
  }
function compareGuesses(human,computer,target){
  let y= Math.abs(human - target);
  let z= Math.abs(computer - target);
if( y === z){
  return true
}else if(y < z){
  return true
}else{
  return false
}
}
function updateScore(string){
if(string === 'human'){
  humanScore++;
}if(string === 'computer'){
  computerScore++
}
}
function advanceRound(){
  currentRoundNumber++
}
console.log(humanScore);
