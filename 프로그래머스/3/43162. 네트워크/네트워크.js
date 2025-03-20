function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({length: n}, _ => 0);
     const dfs = (cur) => {
        for(const i in cur) {
            if (cur[i] === 1 && visited[i] === 0) {
                visited[i] = 1;
                dfs(computers[i]);
            }
        }
    }
    
    for (const i in computers) {
        if(visited[i] === 0) {
            visited[i] = 1;
            answer++;
            dfs(computers[i]);
        }
    }
    return answer;
}