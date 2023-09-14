function solution(lottos, win_nums) {
    const rankingTable = {
        6 : 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    let winningNumber = 0;
    let unknownNumber = 0;
    lottos.forEach((lottoNumber) =>{
        if(win_nums.includes(lottoNumber)){
            winningNumber++;
        } else if(lottoNumber === 0){
            unknownNumber++;
        }
    })
    
    return [rankingTable[unknownNumber+ winningNumber], rankingTable[winningNumber] ]
}