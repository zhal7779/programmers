function solution(t, p) {
    console.log(t,p)
    let pLength = p.length - 1;
    let answer = 0;
    for(let i = 0; i < t.length - pLength; i++){
        if(t.slice(i,pLength + i + 1) <= p){
            answer++;
        }
    }
    return answer;
}