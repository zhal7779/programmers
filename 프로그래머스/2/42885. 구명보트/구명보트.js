function solution(people, limit) {
    let count = 0;
    
    const islandPeople = people.sort((a,b) => b-a);
    
    for(let i = 0; i < islandPeople.length; i++){
         //2명 이하로 타고, limit 제한이 있다.
        if(islandPeople[i] + islandPeople.at(-1) > limit){
            count++;
        } else {
            islandPeople.pop();
            count++; 
            
        }
    }
    return count;
}