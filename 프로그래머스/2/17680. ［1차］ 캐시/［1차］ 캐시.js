function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];

    
    for(let i =0; i< cities.length; i++){
        const uppercaseString = cities[i].toUpperCase(); 
        
        if(cache.includes(uppercaseString)){
            answer+=1;
            
            const index = cache.indexOf(uppercaseString);
            if(index !== -1){
                cache.splice(index, 1);
                cache.push(uppercaseString);
                continue;
            }
            
        }else{
            answer+=5;
        }
        
        
        cache.push(uppercaseString);
        
        if(cache.length > cacheSize){
            cache.shift();    
        }
    
    }
    return answer;
}