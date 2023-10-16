function solution(survey, choices) {
    let answer = '';
    
    const personalityType = [
        {'R': 0, 'T': 0},
        {'C': 0, 'F': 0},
        {'J': 0, 'M': 0},
        {'A': 0, 'N': 0},
    ]; 
    
    const score = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3
    }
    for(let i = 0; i < survey.length; i++) {
        let personalIdx = 0;
        if(survey[i][0] === 'R' || survey[i][1] === 'R') {
            personalIdx = 0;
        } else if(survey[i][0] === 'C' || survey[i][1] === 'C'){
            personalIdx = 1;
        } else if(survey[i][0] === 'J' || survey[i][1] === 'J'){
            personalIdx = 2;
        } else{
            personalIdx = 3;
        }
        
        if(choices[i] < 4) {
            personalityType[personalIdx][survey[i][0]] += score[choices[i]];
        } else if(choices[i] > 4) {
             personalityType[personalIdx][survey[i][1]] += score[choices[i]];
        }
        // } else {
        //      personalityType[personalIdx][survey[i][0]] = 0;
        // }     
    }
    console.log(personalityType)
    const findMaxPersonality = (obj) =>{
        const objValues = Object.values(obj)
        const maxScore = Math.max(...objValues);
        for(let key in obj){
            if(maxScore === obj[key]){
               return key;
            }
        }
    }

    for(let i = 0; i< personalityType.length; i++){
        const maxPersonality = findMaxPersonality(personalityType[i]);
        answer += maxPersonality;
    }
    
    return answer;
    
}