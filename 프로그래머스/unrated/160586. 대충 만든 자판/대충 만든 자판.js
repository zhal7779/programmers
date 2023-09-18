function solution(keymap, targets) {
    var answer = [];
    
    const map = new Map();
    for(let i = 0; i< keymap.length; i++){
        for(let j = 0; j<keymap[i].length; j++){
             if(!map.has(keymap[i][j])){
                map.set(keymap[i][j],j+1)   
            } else{
                if(map.get(keymap[i][j]) > j+1){
                    map.set(keymap[i][j],j+1)   
                }  
            }
        }
    }
    targets.forEach((target) => {
        let padNumber = 0;
        for(let i in target) {
            if(map.get(target[i]) == undefined) {
                padNumber = -1;
                break;
            }
            else padNumber+= map.get(target[i]) 
        }
      answer.push(padNumber);
    })
    
    return answer;
}