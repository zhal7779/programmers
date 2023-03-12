function solution(array, commands) {
    let answer = [];
    for(let i =0; i< commands.length;i++){
        let arrSlice = array.slice(commands[i][0]-1, commands[i][1]);
        let arrSort =  arrSlice.sort((a,b)=>a-b);
       answer.push(arrSort[commands[i][2]-1])
    }
    return answer;
}