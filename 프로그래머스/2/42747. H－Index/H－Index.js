function solution(citations) {
    var answer = 0;
    const sortArr  = citations.sort((a,b)=> b-a);
    let quotation = 0;
    const temp = [];
    for(let i= 0; i<sortArr.length; i++){
        quotation++;
      temp.push(Math.min(sortArr[i],quotation));
    }
    
    return Math.max(...temp);
}