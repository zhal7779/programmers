function solution(arr, delete_list) {

    for(let i = 0; i < delete_list.length; i++){
    if (arr.includes(delete_list[i])) { 
        const arrIndex = arr.indexOf(delete_list[i])
        arr.splice(arrIndex, 1)
        }
    }
   
    return arr;
}