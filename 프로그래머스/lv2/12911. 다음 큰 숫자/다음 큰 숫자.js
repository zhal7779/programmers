function solution(n) {
    let count = 0;
    const num = numberToBinary(n)
      while(true){
        n++;
        if (numberToBinary(n) == num){
            return n
        }
    }
}

function numberToBinary(number){
    return number.toString(2).split('').filter(n => n == 1).length
}
