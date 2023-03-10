function solution(left, right) {
    let answer = 0;
   
    for(let i = left; i <= right; i++){
         let stock = []
        for(let j = 1; j<= right; j++){
            if(i%j === 0){
                stock.push(j)
            }
        }
       if(stock.length % 2=== 0){
           answer += i
       } else{
            answer -= i
       }
    }
        
    return answer;
}