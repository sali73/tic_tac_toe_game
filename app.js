//player names and game turn
var player1Name="" , player2Name="", turn = "";
//array for mapping the moves of players
//counting the total number of moves
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
//initializing function for second time or more
function init(){
    //clear the old values,turn,array,messages
    turn = "";
    grid =  [[0,0,0],[0,0,0],[0,0,0]];
    boardMsg("");
    $(".col").map(function() {
        $(this).text("");
    }).get();
    hasWinner = 0;
    moveCount=0;
}
//click event
$("#playButton").click(function (){
    if(hasWinner==1){
        init();
    }
    //initalize the necessary values again.
    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();
    //players set their names
    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }
    setTurn();
});

//click function on every .col class.
$(".col").click(function (){

    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }
    var row = $(this).parent().index();
    var col = $(this).index();
    //position is taken
    if(grid[row][col]!==0){
        alert("This position is taken. Please try other position.");
        return;
    }
    //play again
    if(hasWinner==1){
        alert("Please click play again");
        return;
    }
    //checking who is playing now
    if(turn==player1Name){
        moveCount++;
        $(this).text("O");
        grid[row][col] = 1;
        var ifWon = winnerCheck(1,player1Name);
        //if he is not win so threr is 3 other option
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            }else{
                turn = player2Name;
                boardMsg(player2Name+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
    // if not player 1turn so its player 2
    else if(turn==player2Name){
        moveCount++;
        $(this).text("X");
        grid[row][col] = 2;
        var ifWon = winnerCheck(2,player2Name);
        //if he is not win so threr is 3 other option
        if(!ifWon){
            if(moveCount>=9){
                boardMsg("Match Drawn!");
                moveCount=0;
                $("#playButton").text("Play again");
                hasWinner=1;
                return;
            }else{
                turn = player1Name;
                boardMsg(player1Name+"'s turn now!");
            }
            return;    
        }
        else{
            return;
        }        
    }
});
//winner check function
function winnerCheck(n,playerName){
    if(

        (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
        (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
        (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
        (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
        (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||

        (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
        (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)
        ){
        // msg for winner with his name
        boardMsg(playerName+" won the game!");
        hasWinner = 1;
        moveCount=0;
        $("#playButton").text("Play again");
        return true;
    }
    return false;
}