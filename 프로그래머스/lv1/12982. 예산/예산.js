function solution(d, budget) {
    let answer = 0;
    const sort_arr = d.sort((a,b)=> a-b);
    
    for(let i = 0; i<d.length; i++){
        budget -= sort_arr[i];
        if( budget >= 0){
            answer++
        } 
    }
    return answer;
}