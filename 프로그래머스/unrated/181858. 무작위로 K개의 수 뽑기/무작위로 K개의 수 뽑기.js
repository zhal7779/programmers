function solution(arr, k) {
    let answer = [];
    
    const set = new Set(arr)
    const newArr = [...set]
    
    if(newArr.length > k) return newArr.slice(0,k)
    
    else if (newArr.length < k){
        while(newArr.length < k) newArr.push(-1)
            answer = newArr
    }
    else return newArr
       
    return answer;
}