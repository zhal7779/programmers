function solution(num, total) {
    let answer = [];
    let n = Math.floor((2 * total / num + 1 - num) / 2);
    for (let i = n; i < n + num; i++) {
        answer.push(i);
    }
    return answer;
}