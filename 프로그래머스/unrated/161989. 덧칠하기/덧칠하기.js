function solution(n, m, section) {
    let answer = 1;
    // 첫 번째 탐색해야 하는 값 초기화
    let startIdx = section[0];
    
    // section 탐색 시작 (초기화한 다음 값부터 탐색 시작)
    for (let i = 1; i < section.length; i++) {
        // 탐색한 값이 startIdx + m 값 범위 내에 있으면 answer을 안 올림.
        if (section[i] < startIdx + m) {
            continue;
        }
        // 탐색한 값이 startIdx + m 값 범위 밖에 있으면 answer을 1 증가시키고, startIdx 재 초기화.
        else {
            startIdx = section[i];
            answer += 1;
        }
    }

    return answer;
}