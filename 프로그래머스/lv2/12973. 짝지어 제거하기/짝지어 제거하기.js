function solution(s){
    let str_arr = [];
    for(let i = 0; i<s.length; i++){
        str_arr.push(s[i]);
        if(str_arr[str_arr.length -1] ===str_arr[str_arr.length -2]){
            str_arr.pop();
            str_arr.pop();
        }
    }
    return str_arr.length === 0? 1: 0;
}