function solution(triangle) {
    let memo = Array.from({ length: triangle.length }, () => Array(triangle.length).fill(-1));

    function dp(level, index) {
        if (level === triangle.length - 1) return triangle[level][index]; 
        if (memo[level][index] !== -1) return memo[level][index]; 
        

        memo[level][index] = triangle[level][index] + 
            Math.max(dp(level + 1, index), dp(level + 1, index + 1));

        return memo[level][index];
    }

    return dp(0, 0);
}