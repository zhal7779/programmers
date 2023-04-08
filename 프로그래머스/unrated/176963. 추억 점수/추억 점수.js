function solution(name, yearning, photo) {
    let answer = [];
    const missScore = {};
    for (let i = 0; i < name.length; i++) {
      missScore[name[i]] = yearning[i];
    }
    
    for(let j = 0; j<photo.length; j++) {
        console.log(photo[j]);
        let score = 0;
        
        for(let k =0; k< photo[j].length; k++){
             const name = photo[j][k];
            if(missScore.hasOwnProperty(name)){
                score += missScore[name];
            } else {
                score += 0;
            }
        }
        answer.push(score);
    }
    return answer;
}