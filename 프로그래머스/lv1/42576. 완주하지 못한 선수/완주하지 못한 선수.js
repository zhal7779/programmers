function solution(participant, completion) {
    let hash = {}
    completion.forEach((person)=>{
        if(!hash[person]){
            hash[person] = 1;
        } else {
            hash[person]++;
        }
   })
    for(let i = 0; i< participant.length; i++){
        if(hash[participant[i]]){
            hash[participant[i]]--;
        } else{
            return participant[i]
        }
    }

}