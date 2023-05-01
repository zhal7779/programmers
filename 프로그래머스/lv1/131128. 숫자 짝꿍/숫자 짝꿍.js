function solution(X, Y) {    
    const xArr = Array(10).fill(0);
    const yArr =  Array(10).fill(0);
    
    const numX = X.split('');
    const numY = Y.split('');
    
    const arr = [];
    
    for(let i in X){
        xArr[X[i]] += 1
    }
    for(let j in Y){
        yArr[Y[j]] += 1
    }
    for(let i = 0; i<10; i++){
       const common = Math.min(xArr[i], yArr[i]);
        for(let j =0; j< common; j++){
            arr.push(i.toString())
        }
    }
    
    const partner = arr.sort((a,b)=>b-a);
    if(partner.length === 0){
        return "-1";
    }
    if(Number(partner.join(''))*1 === 0){
        return "0";
    }
    
    return partner.join('').toString();
}