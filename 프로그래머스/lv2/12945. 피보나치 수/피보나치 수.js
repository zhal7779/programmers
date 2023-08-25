function solution(n){
    let answer =0;
    let f0 = 0;
    let f1 = 1;
    //**i는 2부터 시작한다!! 피보나치 수 계산은 F(2)부터 시작되니깐!
    for(let i=2; i<=n; i++){
        answer = 0;
        answer += (f0 + f1)%1234567;
        f0 = f1;
        f1 = answer;
        
    }
  return answer;
}
