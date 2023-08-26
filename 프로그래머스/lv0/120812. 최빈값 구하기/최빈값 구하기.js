function solution(array) {
    // 배열 길이가 하나일 경우 첫번째 원소 바로 리턴
    if(array.length === 1) return array[0]
    
    let obj = {}
    // 빈 객체에 array를 돌아 처음 들어오는 key이면 key추가, 값은 1 넣어주고
    // 기존에 있던 key이면 값만 1씩 증가.
    for(let num of array){
        if(obj[num]){
            obj[num] ++;
        } else {
            obj[num] = 1;
        }
    }
    //obj key를 value로 기준하여 정렬
    const objKeysSort = Object.keys(obj).sort((a,b)=> obj[b] - obj[a]);
    console.log(objKeysSort)
   // 정렬한 objKeysSort는 인덱스로 활용하여 0번째랑 1번째 인덱스에 값이 동일하면 -1 리턴
    if(obj[objKeysSort[0]] === obj[objKeysSort[1]]) return -1;
    else return Number(objKeysSort[0])
}