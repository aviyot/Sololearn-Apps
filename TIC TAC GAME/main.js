//AVI G 

window.onload = function() {


    var gameCount = 0;//count click of user
    
    var theTDes = document.getElementsByTagName("td");
    
    var displayTurn = document.getElementById("displayTurn");
    
    var btns;
    var myButtons;
    var isMyTurn;
    
    
    
    document.getElementById("startNewGame").addEventListener("click",startNewGame);
    
    function startNewGame() {
    
    isMyTurn = true;
    
    displayTurn.innerHTML="X";
    
    document.getElementById("startNewGame").disabled = true;
    
    document.getElementById("gameStatus").innerHTML = "";
    
    
    for (var i = 0; i < theTDes.length; i++) {
    
    
    theTDes[i].innerHTML = `<input type="button" 
            class="btn"
            value ="" 
            style=""/>`;
    
    //console.log(theTDes[i].innerHTML);
    }
    
    
    
    btns = document.querySelectorAll(".btn");
    for (var i = 0; i < btns.length; i++)
    btns[i].addEventListener("click",markXorO)
     
    }
    
    startNewGame();
    
    function markXorO(event) {
    
    
    var mark;
    
    //console.log(gameCount,btns.length);
    
    if (gameCount < btns.length) {
    
    
    event.currentTarget.disabled = true;
    
    
    if (isMyTurn) {
    
    
    mark = "X";
    
    isMyTurn = !isMyTurn;
    
    displayTurn.innerHTML = `<mark>O</marK>`
    
    event.currentTarget.value  = mark;
    
    gameCount++;
    
    if (checkWin(mark)) {
    
    document.getElementById("startNewGame").disabled = false;
    gameCount = 0;
    
    document.getElementById("gameStatus").innerHTML = `<h2>The winner is X </h2>`;
    
    for(var i = 0 ; i < btns.length ; i ++)
    
    btns[i].disabled = true;
    
    }
    
    }
    
    
    
    else {
    
    
    mark = "O";
    
    isMyTurn = !isMyTurn;
    
    displayTurn.innerHTML = `<mark>X</marK>`
    
    event.currentTarget.value = mark;
    
    gameCount++;
    
    if (checkWin(mark)) {
    
    document.getElementById("startNewGame").disabled = false;
    gameCount = 0;
    document.getElementById("gameStatus").innerHTML = `<h2>The Winner is O </h2>`;
    
    
    for(var i = 0 ; i < btns.length ; i ++)
    
        btns[i].disabled = true;
    
    
    }
    
    
    
    
    }
    
    
    if(gameCount  ==  btns.length){
    for(var i = 0 ; i < btns.length ; i ++)
    
        btns[i].disabled = true;
    
    //console.log("finish");
    document.getElementById("gameStatus").innerHTML = "<mark><h2> A Tie </h2> </mark>";
    
    document.getElementById("startNewGame").disabled = false;
    
    gameCount = 0;
    
    }
    
    }
    
    function checkWin(m) {
    
    if ((btns[0].value === m) && ( btns[1].value === m ) && ( btns[2].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[3].value === m) && ( btns[4].value === m ) && ( btns[5].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[6].value === m) && ( btns[7].value === m ) && ( btns[8].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[0].value === m) && ( btns[3].value === m ) && ( btns[6].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[1].value === m) && ( btns[4].value === m ) && ( btns[7].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[2].value === m) && ( btns[5].value === m ) && ( btns[8].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[0].value === m) && ( btns[4].value === m ) && ( btns[8].value ===m )) {
    
    return true;
    
    }
    
    if ((btns[2].value === m) && ( btns[4].value === m ) && ( btns[6].value ===m )) {
    
    return true;
    
    }
    
    }
    }
    }
    
    