//유클리드 호제법 (최대공약수)
function gcd(num1, num2) {
    if(num2 === 0) return num1;
    else return gcd(num2, num1 % num2);
}
// 최소공배수 식 : 두수의 곱 / 최대공약수 
function solution(arr) {
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
}