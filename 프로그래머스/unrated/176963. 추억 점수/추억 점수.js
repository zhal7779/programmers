function solution(name, yearning, photo) {
    let answer = [];
    //name을 key를 yearning을 value로 객체를 담아준다
    // ex) {"may": 5, "kein":10}
    const missScore = {};
    for (let i = 0; i < name.length; i++) {
      missScore[name[i]] = yearning[i];
    }
     // missScore key와 photo 원소가 일치하면 value(점수)를 더해줄 이중 for문  
    for(let j = 0; j<photo.length; j++) {
        // missScore value를 더해줄 변수, answer에다가 최종 점수를 담아주면 다시 0으로 리셋
        let score = 0;
        for(let k =0; k< photo[j].length; k++){
             const name = photo[j][k];
            //missScore에 name값이 들어있다면 missScore 값(점수)를 score에 더해주고, 
            if(missScore.hasOwnProperty(name)){
                score += missScore[name];
            } else { //name값이 없다면 0을 더해준다
                score += 0;
            }
        }
        //최종 점수를 answer에 push해준다
        answer.push(score);
    }
    return answer;
}