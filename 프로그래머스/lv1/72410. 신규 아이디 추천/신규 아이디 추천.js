function solution(new_id) {
    let answer = new_id;
    //1단계
    answer = answer.toLowerCase();
    //2단계
    answer = answer.replace(/[^\w\-\.]/g, "");
    //3단계
    answer = answer.replace(/\.{2,}/g, ".")
    //4단계
    answer = answer.replace(/^\.|\.$/, "");
    if(answer === '') answer = 'a'
    //6단계
    if(answer.length >= 16) answer = answer.substr(0, 15)
    if( answer[answer.length-1] === '.') answer = answer.replace(/\.$/, "")
    //7단계
    if(answer.length <=2) {
        answer = answer + answer[answer.length-1].repeat(3-answer.length)   
    }
    
    
    return answer;
}