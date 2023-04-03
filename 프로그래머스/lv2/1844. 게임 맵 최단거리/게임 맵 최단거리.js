function solution(maps) {
    //정답 제출용 변수 answer 
    let answer = -1;
    const n= maps.length;
    const m = maps[0].length;

    //x,y축이 움직여야하기 때문에 (상,하,좌,우) 배열 저장
    const move_x = [0, 0, 1, -1];
    const move_y = [1, -1, 0, 0];

    // bfs를 돌리기 위해 queue에 초기값 저장, queue[2]는 이동거리리
    const queue = [[0, 0, 1]];

    //bfs 돌림
    while (queue.length) {
        //  현재 값에 큐값을 꺼낸다.
        const now_q = queue.shift();

        // 현재 위치에서 상,하,좌,우 이동할 반복문
        for (let i = 0; i < 4; i++) {
            const new_y = now_q[0] + move_y[i];
            const new_x = now_q[1] + move_x[i];
            
            //new_x와 new_y가 주어진 배열의 범위 안에 있고, 아직 방문하지 않았다면(아직 1이라면)
            if (new_x >= 0 && new_y >= 0 && new_x < m && new_y < n && maps[new_y][new_x] === 1) {
                //방문표시를 위해 방문한 위치는 0으로 바꿔줌
                maps[new_y][new_x] = 0;
                
                //큐에 해당 값을 넣어주고, now_q[2](이동거리)를 1씩 증가해준다.
                queue.push([new_y, new_x, now_q[2] + 1]);    
            }
        }

         //꺼낸 값이 도착지([n-1][m-1])라면 이동거리를 리턴한다.
         if (now_q[0] === n - 1 && now_q[1] === m - 1) {
            answer = now_q[2]
            return answer;
        }
    }
    
    //도착지까지 가지 못했다면(도착지를 갈 수 없다면) 처음 answer에 넣어둔 -1를 리턴 
    return answer;
}
