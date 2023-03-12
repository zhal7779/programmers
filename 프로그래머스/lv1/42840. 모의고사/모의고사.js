function solution(answers) {
     let answer = [];
    
    const student_1 = [1, 2, 3, 4, 5];
    const student_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];    
    let score = [0,0,0]
    
    for(let i =0; i < answers.length; i++){
        if(student_1[i % 5] === answers[i]) score[0]++
        if(student_2[i % 8] === answers[i]) score[1]++
        if(student_3[i % 10] === answers[i]) score[2]++
    }
    let  max_score = [Math.max(...score) ]
    for(let j in score){
        if(max_score.includes(score[j])){
            answer.push(Number(j)+1);
        }
    }
    return answer;
}