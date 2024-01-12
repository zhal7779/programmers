function solution(friends, gifts) {
    
    let answer = 0;
    const recordGift = {}; 
    const score = {};
    const mostReceivedGift = {}
    
    for(let i = 0; i< friends.length; i++){
        recordGift[friends[i]] = {};
        score[friends[i]] = 0;
        mostReceivedGift[friends[i]] = 0;
        for(let j = 0; j< friends.length; j++){
            if(friends[i] !== friends[j]){
               recordGift[friends[i]][friends[j]] = [0,0];
            }
        }
    }

    for(let i = 0; i <gifts.length; i++){
        const giver = gifts[i].split(' ')[0];
        const receiver = gifts[i].split(' ')[1];
        //선물을 주고 받은 기록 저장
        recordGift[giver][receiver][0] += 1;
        recordGift[receiver][giver][1] +=1;
        
        //선물 지수
        score[giver]+=1;
        score[receiver]-=1
    }
    
    for(let i in recordGift){
        for(let j in recordGift[i]){
             if(recordGift[i][j][0] > recordGift[i][j][1] ){
                mostReceivedGift[i] +=1; 
            } else if(recordGift[i][j][0] === recordGift[i][j][1]){
                if(score[i] > score[j]){
                    mostReceivedGift[i] +=1;   
                 }
            }
        }
    }   
    console.log(recordGift,score,mostReceivedGift)
    return Math.max(...Object.values(mostReceivedGift));
}