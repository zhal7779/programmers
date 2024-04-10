function solution(clothes) {
    let answer = 1;
    const hash = {};
    
    for(let i = 0; i< clothes.length; i++){
        if(!Object.keys(hash).includes(clothes[i][1])){
            hash[clothes[i][1]] = [clothes[i][0]]
        } else {
            hash[clothes[i][1]].push(clothes[i][0])
        }
    }
    
    for (const [key, value] of Object.entries(hash)) {
            
        answer *= (value.length + 1)
    }
    
    return answer -1;
}