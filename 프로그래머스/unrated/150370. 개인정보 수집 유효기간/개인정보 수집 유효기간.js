function solution(today, terms, privacies) {
    let answer = [];
  
    let todayDate = (parseInt(today.slice(0,4))*12*28) + (parseInt(today.slice(5,7))*28) + (parseInt(today.slice(8,10)))
 
    //terms를 사용하기 편하게 객체로 만들어준다. ex) { A: 6, B: 12, C: 3 }
    const  expiryDate = {};
    for(let i in terms){
        const [key, value] = terms[i].split(' ');
        expiryDate[key] = parseInt(value);
    }
    // 약관 종류에 따라 유효기간을 더해줘 날짜 계산을 해주고, newPrivacies 배열에 담아준다.
    const newPrivacies = [];
    for(let j in privacies){
        //privacies에서 날짜만 가져와 date 상수에 넣어준다
        const date = privacies[j].split(' ')[0];
        //privacies에서 약관 종류만 가져와 termsType 상수에 넣어준다
        const termsType = privacies[j].split(' ')[1];
        let resultDate = 0;
        resultDate += parseInt(date.slice(0,4))*12*28; 
        resultDate += parseInt(date.slice(5,7))*28;
        resultDate += parseInt(date.slice(8,10))
         if (expiryDate.hasOwnProperty(termsType)) {
            resultDate += expiryDate[termsType]*28
        }
        newPrivacies.push(resultDate-1)
    }
    
    for(let k in newPrivacies){
        if(newPrivacies[k] < todayDate) answer.push(parseInt(k)+1);
    }
    return answer;
}
