function solution(sizes) {
    let answer = 0;
    let w = [];
    let h = [];
    for(let i = 0; i < sizes.length; i++){
        w.push(Math.max(...sizes[i]))
        h.push(Math.min(...sizes[i]))
    }
   
    answer = Math.max(...w)*Math.max(...h);

    return answer;
}
