function solution(n) {
    let count = 0;
    const num = n.toString(2).split('').filter(n => n == 1).length;
      while(true){
        n++;
        if (n.toString(2).split('').filter(n => n == 1).length == num){
            return n
        }
         
    }
}