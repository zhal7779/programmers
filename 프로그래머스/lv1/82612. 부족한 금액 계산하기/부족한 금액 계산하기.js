function solution(price, money, count) {
    var answer = -1;
    var add = 0;
    for(let i = 1; i <= count; i++){
       add+= i* price;
        console.log(add,money)
        if(add > money){
            answer = add -money;
            
        } else {
            answer = 0;
        }
    }

    return answer;
}