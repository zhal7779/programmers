function solution(s){
    let answer = true;
    let bracket = 0;
    if (s[0] === ')'){
        return false
    }
    for(let i = 0; i< s.length; i++){
       if(s[i] === '('){
           bracket++;
       } else {
           bracket--;
       }   
    
        if(bracket < 0){
            answer = false;
            break;
        } 
    }
    if(bracket !== 0){
        return false
    }
    return answer;
}