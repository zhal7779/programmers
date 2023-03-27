function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1;i<= number; i++) {
            let divisor = 0;
        for(let j = 1;j <= i/2; j++){
            if(i%j === 0) divisor++;
        }
        divisor++;
        if(divisor <= limit) answer+= divisor;
        else answer+= power;
    } 
    return answer;
}