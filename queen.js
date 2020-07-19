// for(var i=0 ; i<64 ; i++){
//     document.getElementsByTagName("td")[i];
//     idiot.innerHTML = "0";
// }

var speed = 100;
var delay_time = 20;  
var c_delay = 0;

function updateQueenOn(current){
    window.setTimeout(function(){
       document.getElementsByTagName("td")[current].innerHTML = "Q";
       document.getElementsByTagName("td")[current].style.fontSize = "40px";

    }, c_delay += delay_time)
    
}

function updateQueenOff(current){
    window.setTimeout(function(){
       document.getElementsByTagName("td")[current].innerHTML = " ";
    }, c_delay += delay_time) 
}

var size = 8;
calcQueens(size);

function calcQueens(size){
    c_delay = 0;
    var board = new Array(size);
    var solution = queen(board, 0, size);
    if (solution)   return true;
}


function queen(board, current, size){
    
    if(current === size)
        return true;
    
    for(var i=0 ; i<size ; i++){
        board[current] = i;
        // document.getElementsByTagName("td")[current].innerHTML = "Q";
        updateQueenOn(i*size + current);
        
        if(noConflicts(board, current)){
            var done = queen(board, current+1, size);
            if(done){return true};
        }
    }
    updateQueenOff(board[current-1]*size + (current-1));    
    return false;
}

function noConflicts(board, current){
    for(var i=0 ; i<current ; i++){
        if(board[i] === board[current]){ updateQueenOff(board[current]*size + current);  return false;}
        if(current - i === Math.abs(board[current] - board[i])){ updateQueenOff(board[current]*size + current);  return false;}
    }
    return true;
}
