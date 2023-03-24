function solution(N, stages) {
    let answer = [];
    let total_user = stages.length
    for(let i = 1;  i<= N; i++){
        let stagePeople = stages.filter(el => el === i).length
        answer.push([i, stagePeople / total_user])
        total_user -= stagePeople
    }
    answer.sort((a, b) => b[1] - a[1]).filter(el => el.splice(1));
    
    
    return answer.map(el => Number(el));
}