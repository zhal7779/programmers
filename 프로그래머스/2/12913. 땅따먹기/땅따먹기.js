function solution(land) {
    for(let i = 1; i < land.length; i++) {
        let maxVal = Math.max(...land[i - 1]);
        let maxValIndex = land[i - 1].indexOf(maxVal);
        land[i - 1][maxValIndex] = -1;
        let secondMaxVal = Math.max(...land[i - 1]);
        
        for(let j = 0; j < land[i].length; j++) {
            if(j !== maxValIndex) {
                land[i][j] += maxVal;
            } else {
                land[i][j] += secondMaxVal;
            }
        }
    }
    return Math.max(...land.at(-1));
}