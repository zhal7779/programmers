function solution(numer1, denom1, numer2, denom2) {
    //분자
    const numerator = numer1*denom2 + numer2*denom1
    //분모
    const denominator = denom1*denom2
    //최대공약수 구해주는 함수 
    function gcd(num1, num2){
        //num2가 0이 될때까지 재귀를 통해 반복한다.
        if(num2 === 0){
            return num1
        } else{
            return gcd(num2, num1 % num2)
        }
    }
    // 최대공약수 
    const gcdNumber = gcd(numerator, denominator);
    // 분자와 분모에 최대공약수를 각각 나눠준다. 
    return [numerator/gcdNumber, denominator/gcdNumber ]
}