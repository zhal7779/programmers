function solution(board, moves) {
    let count = 0;
    const basket = [];
    for(let i = 0; i< moves.length; i++){
        for(let j =0;  j<board.length; j++){
            let pick = [moves[i]-1];
            if(board[j][pick] !== 0){  
                if( basket[basket.length-1] == board[j][pick]){
                    board[j][pick] = 0;
                    basket.pop();
                    count+= 2;
                    break;  
                } else{
                    basket.push(board[j][pick]); 
                     board[j][pick] = 0;
                    break;  
                    
                }   
            }
        }   
    } 
    return count;
}