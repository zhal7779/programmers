function solution(n, arr1, arr2) {
    let answer = [];
    let arr_binary = [];
    for(let i = 0; i < n; i++){
        let binary =(arr1[i] | arr2[i]).toString(2)
        if((binary).length < n ){
            binary = binary.padStart(n, 0)
            arr_binary.push(binary);
        } else{
            arr_binary.push(binary);
        }
    }
     console.log(arr_binary)
    for(let j = 0; j<n; j++){
        for(let k = 0; k<n; k++){
              if(parseInt(arr_binary[j][k]) == 1){
                  answer.push('#')
              }  else{
                   answer.push(' ')
              }
        }
    }
    return answer.join('').match(new RegExp('.{1,' + n + '}', 'g'));
}