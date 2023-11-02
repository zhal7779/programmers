function solution(want, number, discount) {
    let count = 0;
    const shoppingList = {};
    
    function checkAllZeros(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
          return false;
        }
      }
      return count++;
    }

    let min_num = 0;
    let max_num = 9;
    
    while(min_num <= discount.length){
        want.forEach((key, index)=>{
            shoppingList[key] = number[index];
        })
    
        for(let i = min_num; i <= max_num; i++){
            if(Object.keys(shoppingList).includes(discount[i])){
                shoppingList[discount[i]] --;
            }
        }  
        const shoppingCount = Object.values(shoppingList);
        checkAllZeros(shoppingCount);
        // if(discount.length - 10 > min_num)
              min_num++;
        if(discount.length > max_num) max_num++;
    }
    
    return count;
}   