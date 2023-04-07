function solution(dartResult) {
    let answer = [];
    const score = dartResult.split('');
    
    for(let i = 0; i < score.length; i++) {
        if(score[i] == 1) {
            if(score[i+1] == 0) {
                score[i] = '10';
                score.splice(i+1, 1)
            }
        }
        if(score[i] === 'S') {
            answer.push(score[i-1] ** 1);
        }
        if(score[i] === 'D') {
            answer.push(score[i-1] ** 2);
        }
        if(score[i] === 'T') {
            answer.push(score[i-1] ** 3);
        }
        
        if(score[i] === '*') {
            if(answer.length - 2 !== undefined) {
                answer[answer.length-1] *= 2;
                answer[answer.length-2] *= 2;
            } else {
                answer[answer.length-1] *= 2;
            }
        }
        if(score[i] === '#') {
                answer[answer.length-1] *= -1;
           }
    }
    answer = answer.reduce((a, b) => a+b);
    return answer;
}