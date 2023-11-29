let score={
    Win:0,
    Lose:0,
    Tie:0
};

function fn(){
    let randomVlaue=Math.random();
    
    console.log(randomVlaue);
    
    if(randomVlaue>=0 && randomVlaue<1/3){
        computerInput='Rock';
        
    }
    else if(randomVlaue>=1/3 && randomVlaue<2/3){
        computerInput='Paper';
    
    }
    else{
        computerInput='scissors';
    }
    
    return computerInput;
}


function playGame(palyerChoice){
    computerInput=fn();
    if(palyerChoice=='Rock'){
        if(computerInput==='Rock'){
            result='Tie';
        }
        else if(computerInput==='Paper'){
            result='You Lose';
        }
        else{
            result='You Win'

    }
}
    else if(palyerChoice=='Paper'){
        if(computerInput==='Paper'){
            result='Tie';
        }
        else if(computerInput==='Rock'){
            result='You Win';
        }
        else{
            result='You Lose';
        }

    }
    else if(palyerChoice=='scissor'){
        if(computerInput==='Rock'){
            result='You Lose';
        }
        else if(computerInput==='Paper'){
            result='You Win';
        }
        else{
            result='Tie';
        }


    }
    if(result=='You Win'){
        score.Win+=1;
    }
    else if(result=='You Lose' ){
        score.Lose+=1;
    }
    else if(result=='Tie'){
        score.Tie+=1;
    }
    // alert(`You Choose ${palyerChoice}. computer choose ${computerInput}.The result is ${result} 
    // Win: ${score.Win} Lose: ${score.Lose} Tie:${score.Tie}`);
    document.getElementById("Winspan").innerHTML=score.Win;
    document.getElementById("Losespan").innerHTML=score.Lose;
    document.getElementById("Tiespan").innerHTML=score.Tie;
    document.getElementById("playerH1").innerHTML=palyerChoice;
    document.getElementById("computerH1").innerHTML=computerInput;
    document.getElementById("resultH1").innerHTML=result;
}
function reset(){
    score.Win=0;
    score.Lose=0;
    score.Tie=0;
    document.getElementById("Winspan").innerHTML=score.Win;
    document.getElementById("Losespan").innerHTML=score.Lose;
    document.getElementById("Tiespan").innerHTML=score.Tie;

}
