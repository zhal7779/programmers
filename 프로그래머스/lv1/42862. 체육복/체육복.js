function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost.sort((a,b)=> a-b)
    reserve.sort((a,b)=> a-b)
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                answer++;
                i--;
                break;
            }
        }
    }

 
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
                reserve.splice(j, 1);
                answer++;
                break;
            }
        }
    }

    return answer;
}