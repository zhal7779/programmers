function solution(a, b, n) {
    let cola = 0;
    while(a  <= n){
        cola +=  Math.floor(n/a)*b
         n  = Math.floor(n/a)*b + n%a
    }
    return cola;
    
}