function solution(players, callings) {
    const rankingTemp = {};
    
    
    for (let i = 0; i < players.length; i++) {
        rankingTemp[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const curIdx = rankingTemp[callings[i]];
        const temp = players[curIdx-1];
      
        players[curIdx-1] = callings[i];
        players[curIdx] = temp;
          
        rankingTemp[callings[i]] = curIdx - 1;
        rankingTemp[temp] = curIdx;
    }
    
    return players;

}