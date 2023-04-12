function solution(brown, yellow) {
    let width = 0;
    let height = 0;
    const total=brown+yellow;
 
    for(let i=1;i<=total;i++){
        
        width=i;
        height=parseInt(total/width);
      
        let yellowWidth=width-2;
        let yellowHeight=height-2;
     
        if (yellowWidth*yellowHeight === yellow)    return [height, width];
    }
}