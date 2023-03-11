function solution(numbers) {
    let answer = 0;
    const num = [0,1,2,3,4,5,6,7,8,9]
    for(let i = 0; i< num.length; i ++){
         if(!numbers.includes(num[i])){
              answer+= num[i]
          }
    }
    return answer;
}