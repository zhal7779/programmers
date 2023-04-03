  function solution(numbers, hand) {
    let answer = '';
    let left = 10;
    let right = 12;

    for(let i = 0; i <numbers.length; i++){
        if(numbers[i] === 0){ 
            numbers[i] = 11;
        }
        
        //왼손일 경우      
        if(numbers[i] === 1 || numbers[i] ===  4 || numbers[i] === 7){
            answer += 'L'
            left = numbers[i];
        //오른손일 경우
        } else if(numbers[i] === 3 || numbers[i] ===  6 || numbers[i] === 9){
             answer += 'R'
             right = numbers[i];  
        //2,5,8,0(11)일 경우         
        } else {
             let L_keypad = 0;
             let R_keypad = 0;
             
             if(left === 1 || left === 4 || left === 7 || left === 10){
                L_keypad = Math.abs((numbers[i] - (left + 1)) / 3) + 1;
            } else {
                L_keypad = Math.abs((numbers[i] - left) / 3);
            }
            
             if(right === 3 || right === 6 || right === 9 || right === 12){
                R_keypad = Math.abs((numbers[i] - (right - 1)) / 3) + 1;
            } else{ 
                R_keypad = Math.abs((numbers[i] - right) / 3);
            }
            
            // 왼손,오른손 거리가 동일하면
            if(L_keypad === R_keypad){
                if(hand === "left") {
                    answer += "L";
                    left = numbers[i];
                } else {
                    answer += "R";
                    right = numbers[i];
                }
            } else if( L_keypad < R_keypad){
                answer += "L";
                left = numbers[i];
            } else {
                answer += "R";
                right = numbers[i];
            }
            console.log(L_keypad, R_keypad)
        }   
        
    }
    return answer;
}
