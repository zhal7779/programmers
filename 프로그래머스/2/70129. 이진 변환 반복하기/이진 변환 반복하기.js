
function solution(s) {
    let count = 0;
    let zero = 0;
    while (s.length > 1){
         count++
        let num = 0;
        for(let i in s){
          if(s[i] == 0) {
                zero++;
            } else {
                num++;       
            } 
        }
        s = num.toString(2);
    }
    

    return [count, zero];
}