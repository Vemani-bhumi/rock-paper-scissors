let player_choice = prompt('Enter your choice : ').toLowerCase();
let choices = ['rock','paper','scissors'];


let computer_choice = computer_play();
console.log(`Player chose ${player_choice}\nComputer chose ${computer_choice}`);
round(computer_choice,player_choice);

function computer_play(){
    let random = Math.random()*choices.length | 0;

    let computer_choice = choices[random]

    return computer_choice

}

function round(computer_selection, player_selection){
    if (computer_selection === "rock"){
        if (player_selection === "scissors"){
            console.log('You Lose! Rock beats Scissors.');
        }
        else if(player_selection === "paper"){
            console.log('You Won! Paper beats Rock.');
        }
        else{
            console.log('Tie!');
        }
    }
    else if (computer_selection === "paper"){
        if (player_selection === "rock"){
            console.log('You Lose! Paper beats Rock.');
        }
        else if(player_selection === "scissors"){
            console.log('You Won! Scissors beats Paper.');
        }
        else{
            console.log('Tie!');
        }
    }
    else {
        if (player_selection === "paper"){
            console.log('You Lose! Scissor beats Paper.');
        }
        else if(player_selection === "rock"){
            console.log('You Won! Rock beats Scissors.');
        }
        else{
            console.log('Tie!');
        }
    }

}
