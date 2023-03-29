function solution(n){
    let answer = [];
    
    for (let i = 0; i <= n; i += 1) {
        answer.push(true);
    }
    for (let i = 2; i * i <= n; i += 1) {
        if (answer[i]) {
            for (let j = i * i; j <= n; j += i) {
                answer[j] = false;
            }
        }
    }
    answer.splice(0, 2, false, false);
    
    const result = answer.filter(value => value !== false)
    


    return result.length;
}