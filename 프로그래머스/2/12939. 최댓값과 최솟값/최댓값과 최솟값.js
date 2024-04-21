function solution(s) {
    const sortArr = s.split(' ').sort((a,b) => a-b);
 
    return `${sortArr[0]} ${sortArr[sortArr.length-1]}`;
}