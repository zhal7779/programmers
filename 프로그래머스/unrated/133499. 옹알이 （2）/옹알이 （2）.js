function solution(babbling) {
    let answer = 0;
    for (let i of babbling) {
        if (/(aya|ye|woo|ma)\1+/g.test(i)) continue;
        if (/^(aya|ye|woo|ma)+$/g.test(i)) answer++;
    }

    return answer;
}