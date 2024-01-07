function solution(numbers) {
    const answer = [];
    const stack = [];
    
    while(numbers.length){
        if(stack.length === 0){
            answer.push(-1);
            stack.push(numbers[numbers.length-1]);
            numbers.pop();
        } else {
            if(stack[stack.length -1] > numbers[numbers.length-1]){
                answer.push(stack[stack.length -1]);
                stack.push(numbers[numbers.length-1]);
                numbers.pop();
            } else{
                stack.pop();
            }
        }
    }
    return answer.reverse();
}