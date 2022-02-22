// function getRandomInt (max) {

// return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));

// console.log(getRandomInt(1));

// console.log(Math.random());



// function   name_of_function   (List of parameters to the function)

// // Parameters, in a function call, are the function's arguments.
// // Parameters are variables listed as a part of the function definition

// function argCheck(parameter1, parameter2, parameter 3){

// console.log(parameter1 + parameter2 + parameter3);

// }



// functions allow us to take our scripts and bundle them into little packages
// that we can use over and over again without having to rewrite or change the code

// function favoriteAnimal(animal) {

// console.log(animal + "is my favorite animal!")

// }

// favoriteAnimal("Goat")









// function playComputer() {
//     let options = ["rock", "paper", "scissors"];
//     let chosenOption = options[Math.floor(Math.random()*options.length)];
//     return chosenOption;
//     }
    

// const playerSelection = "rock";
// const computerSelection = playComputer();
// console.log(playRound(playerSelection, computerSelection));


let score = document.getElementById("score");
let primary = document.getElementById("primary")
let success = document.getElementById("success")
let danger = document.getElementById("danger")


primary.addEventListener("click", function(){
    playRound("paper")
})

success.addEventListener("click", function(){

 playRound("rock")

})

danger.addEventListener("click", function(){

playRound("SCISSORS")

})

function playRound(playerSelection) {

// const computerSelection = playComputer();



// function playComputer() {
    let options = ["rock", "paper", "scissors"];

    let computerSelection = options[Math.floor(Math.random() * options.length)];
  
    console.log(`Computer chose: ${computerSelection}`)

    //  }

if(     ((playerSelection === "rock") || (playerSelection === "Rock" || playerSelection === "ROCK")) && (computerSelection === "rock") )

{
    
    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. Draw.`;
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     ((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK")) 
    //  || (playerSelection === "Rock") || (playerSelection === "ROCK") 
     && computerSelection === "scissors") {

        document.getElementById('score').innerHTML = "";
        document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You win!`;

}  else if (((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") )
// || (playerSelection === "Rock") || (playerSelection === "ROCK") 
&& computerSelection === "paper") {

    
    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You lose :(`;

    // console.log(computerSelection)
} else if(((playerSelection === "scissors") || (playerSelection === "Scissors") || (playerSelection === "SCISSORS")) 
&& computerSelection === "rock"){
    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You lose :(`;
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     (playerSelection === "scissors") || (playerSelection === "Scissors") || (playerSelection === "SCISSORS") 
     && computerSelection === "scissors") {

        document.getElementById('score').innerHTML = "";
        document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. Draw.`;

}  else if (((playerSelection === "scissors") || (playerSelection === "Scissors") || (playerSelection === "SCISSORS")) 
&& computerSelection === "paper") {

    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You win!`;

    // console.log(computerSelection)
} else if(((playerSelection === "paper") || (playerSelection === "Paper") || (playerSelection === "PAPER")) && computerSelection === "rock"){
    console.log("Win")
    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You win!`;
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     ((playerSelection === "paper") || (playerSelection === "Paper") || (playerSelection === "PAPER")) 
     && computerSelection === "scissors") {
   
        document.getElementById('score').innerHTML = "";
        document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. You lose :(`;
}  else if (((playerSelection === "paper") || (playerSelection === "Paper") || (playerSelection === "PAPER")) 
// || (playerSelection === "Rock") || (playerSelection === "ROCK") 
&& computerSelection === "paper") {

    document.getElementById('score').innerHTML = "";
    document.getElementById('score').innerHTML = `Computer chose ${computerSelection}. Draw.`;

    // console.log(computerSelection)
} 


}





// function passAsArgument() {

// return 1;
// }
// let a = 1;
// function sum(b, c){

//     return b + c;
// }

// sum(a, passAsArgument())

