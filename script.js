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
    
        var computer_choice = computer_play();
        round(computer_choice,player_choice);
        y_score = document.querySelector('#y_score');
        c_score = document.querySelector('#c_score');
        y_score.textContent = player_score;
        c_score.textContent = computer_score;

    }

   

function round(computer_selection, player_selection){

    result = document.querySelector('#result');

    if (computer_selection === "rock"){
        if (player_selection === "scissors"){
            result.textContent = 'Computer chose rock...You Lose! Rock beats Scissors.';
            computer_score+=1;
        }
        else if(player_selection === "paper"){
            result.textContent = 'Computer chose rock...You Won! Paper beats Rock.';
            player_score+=1;
        }
        else{
            result.textContent = 'Computer chose rock...Tie!';
        }
    }
    else if (computer_selection === "paper"){
        if (player_selection === "rock"){
            result.textContent = 'Computer chose paper...You Lose! Paper beats Rock.';
            computer_score+=1;
        }
        else if(player_selection === "scissors"){
            result.textContent = 'Computer chose paper...You Won! Scissors beats Paper.';
            player_score+=1;
        }
        else{
            result.textContent = 'Computer chose paper...Tie!';
        }
    }
    else if(computer_selection === "scissors"){
        if (player_selection === "paper"){
            result.textContent = 'Computer chose scissors...You Lose! Scissor beats Paper.';
            computer_score+=1;
        }
        else if(player_selection === "rock"){
            result.textContent = 'Computer chose scissors...You Won! Rock beats Scissors.';
            player_score+=1;
        }
        else{
            result.textContent = 'Computer chose scissors...Tie!';
        }
    }

    if(computer_score == 5||player_score == 5){
        if(player_score>computer_score){
            result.textContent = 'You won!';
        }
        else if(player_score<computer_score){
            result.textContent = 'Computer won!';
        }
        else{
            result.textContent = 'No one won';
        }
    }

    

}




rbtn.addEventListener('click',() =>{
    player_choice = "rock";
    if(player_score< 5 && computer_score< 5){
        play(player_choice);    
    }
});
pbtn.addEventListener('click',() =>{
    player_choice = "paper";
    if(player_score< 5 && computer_score< 5){
        play(player_choice);    
    }
});
sbtn.addEventListener('click',() =>{
    player_choice = "scissors";
    if(player_score< 5 && computer_score< 5){
        play(player_choice);    
    }
});






