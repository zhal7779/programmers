function solution(wallpaper) {
    const answer = [];
    const yAxis = [];
    const xAxis = [];
    
    for(let i = 0; i< wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                yAxis.push(i);
                xAxis.push(j);
            }
        }
    }
    
    answer.push(Math.min(...yAxis));
    answer.push(Math.min(...xAxis));
    answer.push(Math.max(...yAxis) +1);
    answer.push(Math.max(...xAxis) +1);
    
    return answer;
}