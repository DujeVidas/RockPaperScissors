const btns = document.querySelectorAll('.btn')
const div = document.createElement('div')
const pYou = document.createElement('p');
const pComp = document.createElement('p');
const res = document.createElement('h2');
const again = document.createElement('button')
const vs = document.createElement('h3')

again.textContent = 'Play Again'
div.style.cssText = "height: 200px; width: 200px; border: 4px solid black;"
div.setAttribute("align", "center")

document.body.appendChild(vs)
div.appendChild(pYou)
div.appendChild(pComp)
div.appendChild(res)
document.body.appendChild(div)


const playAgain = () => {
    div.appendChild(again);
    again.addEventListener('click', () =>{
        location.reload()
    })
}

const display = (meScore,cScore,yourChoice,CompChoice) =>{
    
    vs.textContent = `${yourChoice} VS ${CompChoice}`
    pYou.textContent = `Your Score: ${meScore} \n `;
    pComp.textContent = `Computer's score: ${cScore}`;
    if(meScore == 5){
        btns.forEach(button => {
            button.style.visibility = 'hidden';
        });
        vs.style.visibility = 'hidden'
        res.textContent = 'You Win'
        playAgain()
    }
    else if(cScore == 5){
        btns.forEach(button => {
            button.style.visibility = 'hidden';
        });
        vs.style.visibility = 'hidden'
        res.textContent = 'Computer Wins'
        playAgain()
    }
    
}

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

const getPlayerChoice = () => {
    btns.forEach(button => {
        button.addEventListener('click', () => {
            let [meScore, cScore,computerChoice] = game(button.id)
            display(meScore,cScore,button.id,computerChoice)
        })
    });
}


function play(userInput,computerChoice){
    if(userInput == computerChoice){
        return "Draw"
    }
    else if (userInput == "Rock"){
        if(computerChoice == "Paper"){
            return computerChoice
        }
        else {
            return userInput
        }
    }
    else if (userInput == "Paper"){
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


let yourScore = 0
let compScore = 0

const game =  (userInput) => {

    let computerChoice = getComputerChoice()
    let result = play(userInput,computerChoice)
    
    if(result == userInput){
        yourScore++
    }
    else if (result == computerChoice){ 
        compScore++
    }

    return [yourScore,compScore,computerChoice]
}

getPlayerChoice()