let board = ["", "", "", "", "", "", "", "", ""];
let human = "X"; 
let computer = "O"; 

//prevents board from reseting but will submit user input
document.querySelector("#game").addEventListener("submit", function (e) {
  e.preventDefault();
});

//checks if initial user input is invalid 
function checkMove(userMove){
  if(/[0-9]/.test(userMove) && document.querySelector(`.box${userMove}`).innerHTML == userMove){
    return true; 
  }
  alert("Error!"); 
  return false; 
}

//checks all cases for a win 
function checkWin(){
  let score = document.querySelector("#score"); 
  //horizontal
  if((board[0] == human && board[1] == human && board[2] == human) || (board[3] == human && board[4] == human && board[5] == human) || (board[6] == human && board[7] == human && board[8] == human) ) {
    score.innerHTML = "<center><h1>User has won!!</h1></center>"; 
    return true; 
  }

  else if((board[0] == computer && board[1] == computer && board[2] == computer) || (board[3] == computer && board[4] == computer && board[5] == computer) || (board[6] == computer && board[7] == computer && board[8] == computer) ){
    score.innerHTML += "<center><h1>Computer has won!!</h1></center>"; 
    return true; 
  }

  //vertical
  else if((board[0] == human && board[3] == human && board[6] == human) || (board[1] == human && board[4] == human && board[7] == human) || (board[2] == human && board[5] == human && board[8] == human)) {
    score.innerHTML = "<center><h1>User has won!!</h1></center>"; 
    return true; 
  }

  else if((board[0] == computer && board[3] == computer && board[6] == computer) || (board[1] == computer && board[4] == computer && board[7] == computer) || (board[2] == computer && board[5] == computer && board[8] == computer)){
    score.innerHTML += "<center><h1>Computer has won!!</h1></center>"; 
    return true; 
  }
  

  //diagonal win 
  else if((board[0] == human && board[4] == human && board[8] == human) || (board[2] == human && board[4] == human && board[6] == human)) {
    score.innerHTML = "<center><h1>User has won!!</h1></center>"; 
    return true; 
  }

  else if((board[0] == computer && board[4] == computer && board[8] == computer) || (board[2] == computer && board[4] == computer && board[6] == computer)){
    score.innerHTML += "<center><h1>Computer has won!!</h1></center>"; 
    return true; 
  }

  else {
    for(i=0; i<9; i++){
      if(board[i] == ""){
        return false; 
      }
    }
    document.querySelector("#score").innerHTML += "<h1>It is a tie!!</h1>";
    return true; 
  }

  return false; 
}

function computerMove(){

  if((board[0] == human && board[1] == human) || (board[0] == computer && board[1] == computer) && board[2] == ""){
    document.querySelector(".box3").innerHTML = computer; 
    board[2] = computer;
  }

  else if((board[0] == human && board[2] == human) || (board[0] == computer && board[2] == computer) && board[1] == ""){
    document.querySelector(".box2").innerHTML = computer; 
    board[1] = computer;
  }

  else if((board[1] == human && board[2] == human) || (board[1] == computer && board[2] == computer) && board[0] == ""){
    document.querySelector(".box1").innerHTML = computer; 
    board[0] = computer;
  }

  else if((board[0] == human && board[3] == human) || (board[0] == computer && board[3] == computer) && board[6] == ""){
    document.querySelector(".box7").innerHTML = computer; 
    board[6] = computer;
  }

  else if((board[0] == human && board[6] == human) || (board[0] == computer && board[6] == computer) && board[3] == ""){
    document.querySelector(".box4").innerHTML = computer; 
    board[3] = computer;
  }

  else if((board[3] == human && board[6] == human) || (board[3] == computer && board[6] == computer) && board[0] == ""){
    document.querySelector(".box1").innerHTML = computer; 
    board[0] = computer;
  }
  
  else if((board[5] == human && board[8] == human) || (board[4] == computer && board[6] == computer) && board[2] == ""){
    document.querySelector(".box3").innerHTML = computer; 
    board[2] = computer;
  }

  else if((board[3] == human && board[4] == human) || (board[3] == computer && board[4] == computer) && board[5] == ""){
    document.querySelector(".box6").innerHTML = computer; 
    board[5] = computer;
  }

  else if((board[3] == human && board[5] == human) || (board[3] == computer && board[5] == computer) && board[4] == ""){
    document.querySelector(".box5").innerHTML = computer; 
    board[4] = computer;
  }

  else if((board[4] == human && board[5] == human) || (board[4] == computer && board[5] == computer) && board[3] == ""){
    document.querySelector(".box4").innerHTML = computer; 
    board[3] = computer;
  }

  else if((board[6] == human && board[7] == human) || (board[6] == computer && board[7] == computer) && board[8] == ""){
    document.querySelector(".box9").innerHTML = computer; 
    board[8] = computer;
  }

  else if((board[6] == human && board[8] == human) || (board[6] == computer && board[8] == computer) && board[7] == ""){
    document.querySelector(".box8").innerHTML = computer; 
    board[7] = computer;
  }

  else if((board[7] == human && board[8] == human) || (board[7] == computer && board[8] == computer) && board[6] == ""){
    document.querySelector(".box7").innerHTML = computer; 
    board[6] = computer;
  }

  else if((board[1] == human && board[4] == human) || (board[1] == computer && board[4] == computer) && board[7] == ""){
    document.querySelector(".box8").innerHTML = computer; 
    board[7] = computer;
  }

  else if((board[1] == human && board[7] == human) || (board[1] == computer && board[7] == computer) && board[4] == ""){
    document.querySelector(".box5").innerHTML = computer; 
    board[4] = computer;
  }

  else if((board[4] == human && board[7] == human) || (board[4] == computer && board[7] == computer) && board[1] == ""){
    document.querySelector(".box2").innerHTML = computer; 
    board[1] = computer;
  }

  else if((board[2] == human && board[5] == human) || (board[2] == computer && board[5] == computer) && board[8] == ""){
    document.querySelector(".box9").innerHTML = computer; 
    board[8] = computer;
  }

  else if((board[2] == human && board[8] == human) || (board[2] == computer && board[8] == computer) && board[5] == ""){
    document.querySelector(".box6").innerHTML = computer; 
    board[5] = computer;
  }

  else if((board[5] == human && board[8] == human) || (board[5] == computer && board[8] == computer) && board[2] == ""){
    document.querySelector(".box3").innerHTML = computer; 
    board[2] = computer;
  }

  else if((board[0] == human && board[4] == human) || (board[0] == computer && board[4] == computer) && board[8] == ""){
    document.querySelector(".box9").innerHTML = computer; 
    board[8] = computer;
  }

  else if((board[0] == human && board[8] == human) || (board[0] == computer && board[8] == computer) && board[4] == ""){
    document.querySelector(".box5").innerHTML = computer; 
    board[4] = computer;
  }

  else if((board[4] == human && board[8] == human) || (board[4] == computer && board[8] == computer) && board[0] == ""){
    document.querySelector(".box1").innerHTML = computer; 
    board[0] = computer;
  }

  else if((board[2] == human && board[4] == human) || (board[2] == computer && board[4] == computer) && board[6] == ""){
    document.querySelector(".box7").innerHTML = computer; 
    board[6] = computer;
  }

  else if((board[2] == human && board[6] == human) || (board[2] == computer && board[6] == computer) && board[4] == ""){
    document.querySelector(".box5").innerHTML = computer; 
    board[4] = computer;
  }

  else if((board[4] == human && board[6] == human) || (board[4] == computer && board[6] == computer) && board[2] == ""){
    document.querySelector(".box3").innerHTML = computer; 
    board[2] = computer;
  }

  else {
    let checkBoxes = false; 
    while (checkBoxes == false){
      let rand = Math.floor(Math.random() * 9);
      console.log(rand); 
      if(board[rand] == ""){
        let enterMove = rand+1; 
        document.querySelector(`.box${enterMove}`).innerHTML = computer;
        board[rand] = computer; 
        console.log(board); 
        checkBoxes = true; 
      }
    }
  }
}

//base function of game 
function play(){
  let userMove = document.querySelector("#input").value; 

  if(checkMove(userMove)){
    if (checkWin()){
      board=["", "", "", "", "", "", "", "", ""];
    }

    else {
      board[userMove-1] = human; 
      document.querySelector(`.box${userMove}`).innerHTML = human;
      console.log(board); 
      computerMove();
    }
    checkWin(); 
  }

}

let numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
function resetGame(){
  document.querySelector("#score").innerHTML = ""; 
  document.querySelector("#input").value = ""; 
  board=["", "", "", "", "", "", "", "", ""]; 
  
  for(let j=1; j<10; j++){
    document.querySelector(`.box${j}`).innerHTML = numbers[j-1]; 
  }

}