//player names and game turn
var player1Name="" , player2Name="", turn = "";
//array for mapping the moves of players
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
//variables for counting the total number of moves 
var hasWinner = 0, moveCount=0;

//writing on the panel.
function boardMsg(x){
    return $("#board").text(x);
}


function setTurn(){
    //turn randomly for player
    var r = Math.floor((Math.random() * 2) + 1);
    //game has begun just now
    hasWinner=0;
    // player1 or player2
    if(r==1){
        turn = player1Name;
        boardMsg(player1Name+"'s turn now!");
    }
    else{
        turn = player2Name;
        boardMsg(player2Name+"'s turn now!");
    }
}



        boardMsg(playerName+" won the game!");
        hasWinner = 1;
        moveCount=0;
        $("#playButton").text("Play again");
        return true;
 