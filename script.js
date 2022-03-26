var player_score = 0;
var computer_score = 0;
let flag = true;

var choices = ['rock','paper','scissors'];
var player_choice;


const options = document.querySelector('.options');
const rbtn = options.childNodes[1];
const pbtn = options.childNodes[3];
const sbtn = options.childNodes[5];










function computer_play(){
    let random = Math.random()*choices.length | 0;

    let computer_choice = choices[random];

    return computer_choice

}





function play(player_choice){

        let computer_choice = computer_play();
        console.log(`Player chose ${player_choice}\nComputer chose ${computer_choice}`);
        round(computer_choice,player_choice);
        console.log(`Your score ${player_score}\nComputer's score ${computer_score}`);
        
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

    if(computer_score == 5||player_score == 5){
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

    

}




rbtn.addEventListener('click',() =>{
    player_choice = "rock";
    play(player_choice);
});
pbtn.addEventListener('click',() =>{
    player_choice = "paper";
    play(player_choice);
});
sbtn.addEventListener('click',() =>{
    player_choice = "scissors";
    play(player_choice);
});






