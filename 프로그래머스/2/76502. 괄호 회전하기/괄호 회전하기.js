function solution(s) {
    let answer = 0;
    const arr = [...s];
    
    for(let i =0; i< arr.length; i++){
        const temp = [];
        
        for(let j = 0; j<arr.length; j++){
            if(arr[j] === ']' && temp[temp.length-1] === '[' 
                || arr[j] === ')' && temp[temp.length-1] === '('
                || arr[j] === '}' && temp[temp.length-1] === '{'
              ){
                temp.pop();      
            }else{
                temp.push(arr[j]);
            }
            
        }
        if(temp.length === 0){
            answer++;    
        }
        
        arr.push(arr[0]);
        arr.shift();
        
    }
    return answer;  
}