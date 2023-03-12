function solution(s) {
    let answer = [];
    let temp = '';
    const obj ={
        'zero':0,
        'one':1,
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9
}
    const obj_key = Object.keys(obj);
    const obj_value = Object.values(obj);

    for(let i in s){
        if(obj_value.includes(Number(s[i]))){
            answer.push(s[i]);
        } else if(!obj_key.includes(s[i]) ){
            temp+=s[i];
        } 
        if(obj_key.includes(temp)){
            answer.push(obj[temp]);
            temp ='';
        } 
    }
    return Number(answer.join(''));
}