function solution(food) {
    var answer = '';
    for(let i in food){
        let num = 0;
        if(food[i] > 1){
           num = (Math.floor(food[i]/2))
            answer += i.repeat(num)
        }
    }
    
    return answer + '0' + answer.split('').reverse().join('');
}