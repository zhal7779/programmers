function solution(s) {
    let answer = [];
    const tuple = {};
    
    let tempNum  ='';
    
    for(let i = 0; i < s.length; i++){
        if( Number(s[i]) > -1){
            tempNum +=s[i];
        } else if(s[i] === "," || s[i] === "}"){
            if(tempNum.length){
               if(Object.keys(tuple).includes(tempNum)){
                    tuple[tempNum]++; 
                } else {
                     tuple[tempNum] = 1;
                }    
                tempNum = '';   
            }
        }
    }
    
    answer =Object.keys(tuple).sort((a,b) => tuple[b] - tuple[a]);
    
    return answer.map((i) => Number(i));

}