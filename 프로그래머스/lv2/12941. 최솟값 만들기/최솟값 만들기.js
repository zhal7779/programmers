function solution(A,B){
    let answer = 0;
    const A_arr = A.sort((a,b)=> a-b);
    const B_arr = B.sort((a,b)=> b-a);
 
    for(let i in A_arr){
        answer+= A_arr[i]*B_arr[i]
    }
    return answer;
}