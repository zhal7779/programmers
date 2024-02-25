function solution(n) {
    const dp = [1, 1];
    
    for(let i =2; i<= n; i++){
        dp.push(((dp[i-1]) + (dp[i -2])) % 1234567)
    }
    
    
    return dp[dp.length-1];  
}