function solution(wallpaper) {
    const answer = [];
    const rdy = [];
    const rdx = [];
    
    for(let i = 0; i< wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            //rdx rdy
            if(wallpaper[i][j] === '#'){
                rdx.push(j);
                rdy.push(i);
            }
        }
    }
    
    answer.push(Math.min(...rdy));
    answer.push(Math.min(...rdx));
    answer.push(Math.max(...rdy) +1);
    answer.push(Math.max(...rdx) +1);
    
    return answer;
}