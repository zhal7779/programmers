function solution(k, score) {
    let answer = [];
    let scoreArr =[];
    for(let i=0; i < score.length; i++){   
          if(i < k) {
            scoreArr.push(score[i])
            }
        if( Math.min(...scoreArr) < score[i]){
             scoreArr.pop();
             scoreArr.push(score[i]);
             scoreArr.sort((a,b) => b-a)
            
           
        } 
        answer.push(Math.min(...scoreArr))
       
    }
    return answer;
}