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


function playRound(playerSelection) {

// const computerSelection = playComputer();



// function playComputer() {
    let options = ["rock", "paper", "scissors"];

    let computerSelection = options[Math.floor(Math.random() * options.length)];
  
    console.log(computerSelection)

    //  }

if(     (playerSelection === "rock") || (playerSelection === "Rock") && (computerSelection === "rock") )

{
    console.log("Draw")
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     ((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK")) 
    //  || (playerSelection === "Rock") || (playerSelection === "ROCK") 
     && computerSelection === "scissors") {

   console.log("Win");

}  else if (((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") )
// || (playerSelection === "Rock") || (playerSelection === "ROCK") 
&& computerSelection === "paper") {

    console.log("Loss");

    // console.log(computerSelection)
} else if(computerSelection === "rock" && playerSelection === "scissors"){
    console.log("Loss")
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     (playerSelection === "scissors") 
    //  || (playerSelection === "Rock") || (playerSelection === "ROCK") 
     && computerSelection === "scissors") {

   console.log("Draw");

}  else if ((playerSelection === "scissors") 
// || (playerSelection === "Rock") || (playerSelection === "ROCK") 
&& computerSelection === "paper") {

    console.log("Win");

    // console.log(computerSelection)
} else if(computerSelection === "rock" && playerSelection === "paper"){
    console.log("Win")
}
// if((playerSelection === "rock") || (playerSelection === "Rock") || (playerSelection === "ROCK") && computerSelection === "rock") {

//     console.log("Draw"); 

// }
 else if(
     (playerSelection === "paper") 
    //  || (playerSelection === "Rock") || (playerSelection === "ROCK") 
     && computerSelection === "scissors") {

   console.log("Loss");

}  else if ((playerSelection === "paper") 
// || (playerSelection === "Rock") || (playerSelection === "ROCK") 
&& computerSelection === "paper") {

    console.log("Draw");

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