function solution(s) {
const answer = s.split(' ')
        .map(i => i.substr(0, 1).toUpperCase() + i.substr(1).toLowerCase());

    return answer.join(' ');
}