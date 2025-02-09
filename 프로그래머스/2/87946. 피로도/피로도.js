function solution(k, dungeons) {
    let answer = -1;
    let visited = Array.from({ length: dungeons.length }, () => 0);
    
  function recursion(hp, count) {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && hp >= dungeons[i][0]) {
                visited[i] = 1; 
                recursion(hp - dungeons[i][1], count + 1);
                visited[i] = 0;
            }
        }
    }
    
    recursion(k, 0);
    
    return answer;
}



