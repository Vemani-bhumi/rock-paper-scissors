var player_score = 0;
var computer_score = 0;
let round_flag = false;


while(round_flag === false){
    var no_of_rounds = prompt('Enter number of rounds : ').toLowerCase();
    if (isNaN(no_of_rounds)!= false){
        console.log('Enter valid number')
    }
    else{
        round_flag = true;
    }
}

var choices = ['rock','paper','scissors'];



play(no_of_rounds);


function computer_play(){
    let random = Math.random()*choices.length | 0;

    let computer_choice = choices[random]

    return computer_choice

}





function play(no_of_rounds){
    for(let i = 0;i<no_of_rounds;i++){
        let computer_choice = computer_play();
        let player_choice = prompt('Enter your choice : ').toLowerCase();
        console.log(`Player chose ${player_choice}\nComputer chose ${computer_choice}`);
        round(computer_choice,player_choice);
        console.log(`Your score ${player_score}\nComputer's score ${computer_score}`);
    }

    if(player_score>computer_score){
        console.log('You won!');
    }
    else if(player_score<computer_score){
        console.log('Computer won!');
    }
    else{
        console.log('No one won');
    }
}

function round(computer_selection, player_selection){
    if (computer_selection === "rock"){
        if (player_selection === "scissors"){
            console.log('You Lose! Rock beats Scissors.');
            computer_score+=1;
        }
        else if(player_selection === "paper"){
            console.log('You Won! Paper beats Rock.');
            player_score+=1;
        }
        else{
            console.log('Tie!');
        }
    }
    else if (computer_selection === "paper"){
        if (player_selection === "rock"){
            console.log('You Lose! Paper beats Rock.');
            computer_score+=1;
        }
        else if(player_selection === "scissors"){
            console.log('You Won! Scissors beats Paper.');
            player_score+=1;
        }
        else{
            console.log('Tie!');
        }
    }
    else if(computer_selection === "scissors"){
        if (player_selection === "paper"){
            console.log('You Lose! Scissor beats Paper.');
            computer_score+=1;
        }
        else if(player_selection === "rock"){
            console.log('You Won! Rock beats Scissors.');
            player_score+=1;
        }
        else{
            console.log('Tie!');
        }
    }

    else{
        console.log('Invalid Input')
    }

}
