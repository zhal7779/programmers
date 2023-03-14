function solution(n) {
    var answer = 0;
    for(let i = 1; i<= n; i++){
        let num = 0;
        for(let j = i; j<= n; j++){
            num+= j
            if(num === n){
            answer++;     
            } else if(num > n) {
                break;
            }
        }  
    }
    return answer;
}