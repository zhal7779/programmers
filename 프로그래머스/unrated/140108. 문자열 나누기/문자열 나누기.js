function solution(s) {
    let answer = 0;
    let str = ''
    let sameCount = 0;
    let diffCount = 0;
    for(let i = 0; i< s.length; i++){
        if(str.length == 0){
            str = s[i];
        }     
        if(str == s[i]){
            sameCount++;
        } else{
            diffCount++;
        }
        if(sameCount == diffCount){
            answer++
            sameCount = 0;
            diffCount = 0;
            str ='';
        }
    }
    if(str.length > 0){
        answer++
    }
    return answer;
}