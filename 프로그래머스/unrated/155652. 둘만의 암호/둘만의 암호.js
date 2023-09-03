function solution(s, skip, index) {
    let answer = ""
    for(let i = 0; i<s.length; i++) { 
        let aptCode = s[i].charCodeAt(0);

        let j = index;
        while (j > 0) {
            if(aptCode === 122) aptCode = 97;
             else aptCode += 1;
            
            if (!skip.includes(String.fromCharCode(aptCode))) {
                j -= 1
            }
        }
        answer += String.fromCharCode(aptCode)
    }
    return answer
}