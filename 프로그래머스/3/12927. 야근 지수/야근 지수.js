function solution(n, works) {
    if(works.reduce((a,b) => a+b) <= n) return 0;
    
    const sortedWorks = works.sort((a,b) => a-b);
    
    while(n> 0) {
        const maxWork = sortedWorks[works.length -1];
        
       for(let i = works.length -1; i >= 0; i--) {
          if(sortedWorks[i] >= maxWork) {
            sortedWorks[i]--;
            n--;
            }
           
            if(n < 1) break;
       }
  
    }
        
    return sortedWorks.reduce((acc, cur) => acc + cur**2,0);
}
 