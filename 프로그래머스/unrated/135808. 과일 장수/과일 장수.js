function solution(k, m, score) {
    let answer = 0;
    let box = [];
    const scoreArr = score.sort((a,b) => b-a);
    for (let i = 0; i < scoreArr.length; i += m) {
        box.push(scoreArr.slice(i, i+ m));
    }
    for(let j =0; j< box.length; j++){
        if(box[j].length >= m){
            answer += Math.min(...box[j]) * m
        }
    }
    return answer;
    
}