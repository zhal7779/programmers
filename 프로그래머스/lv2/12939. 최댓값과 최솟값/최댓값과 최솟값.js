function solution(s) {
    var answer = '';
    const numArr = s.split(" ");
    answer += Math.min(...numArr) + " ";
    answer += Math.max(...numArr);
    
    return answer;
}