function solution(progresses, speeds) {
    let answer = [];
    let prev = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const cur = Math.ceil((100 - progresses[i]) / speeds[i]);

        if (i === 0 || prev < cur) {
            prev = cur;
            answer.push(1);
        } else {
            answer[answer.length - 1]++;
        }
    }
    
    return answer;
}