

function getComputerChoice(){
    const max = Math.floor(3);
    const min = Math.ceil(1);
    let rand = Math.floor(Math.random() * (max - min +1) + min)
    switch(rand){
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

 

function play(userInput,computerChoice){
    if(userInput == computerChoice.toLowerCase()){
        return "Draw"
    }
    else if (userInput == "rock"){
        if(computerChoice == "Paper"){
            return computerChoice
        }
        else {
            return userInput
        }
    }
    else if (userInput == "paper"){
        if(computerChoice == "Scissors"){
            return computerChoice
        }
        else {
            return userInput
        }
    }
    else {
        if(computerChoice == "Rock"){
            return computerChoice
        }
        else {
            return  userInput
        }
    }
}


function game(){
    let yourScore = 0
    let compScore = 0

    for( i = 0; i<5;i++){
        let userInput = prompt("Play Rock,Paper,Scissors!").toLowerCase()
        let computerChoice = getComputerChoice()
        let result = play(userInput,computerChoice)
        if(result == "Draw"){
            console.log("Draw!")
        }
        else if(result == userInput){
            console.log(`You Win! ${userInput} beats ${computerChoice}`)
            yourScore++
        }
        else{
            console.log(`You Lose! ${computerChoice} beats ${userInput}`)
            compScore++
        }
        console.log(`Result     ${yourScore}:${compScore}`)
    }
    
    if(yourScore > compScore){
        console.log(`You won     ${yourScore}:${compScore}`)
    }
    else if (compScore > yourScore){
        console.log(`You lost     ${yourScore}:${compScore}`)
    }
    else{
        console.log(`Draw     ${yourScore}:${compScore}`)
    }
}

game()