// function solution(today, terms, privacies) {
//     let answer = [];
    
//     //terms를 사용하기 편하게 객체로 만들어준다. ex) { A: 6, B: 12, C: 3 }
//     const  expiryDate = {};
//     for(let i in terms){
//         const [key, value] = terms[i].split(' ');
//         expiryDate[key] = parseInt(value);
//     }
    
//     const newPrivacies = [];
//     for(let j in privacies){
//         const date = privacies[j].split(' ')[0];
//         const termsType = privacies[j].split(' ')[1];
//         let year = parseInt(date.slice(0,4));
//         let month = parseInt(date.slice(5,7));
//         let day = parseInt(date.slice(8,10)) -1 === 0? 28 : parseInt(date.slice(8,10)) -1

//         if (expiryDate.hasOwnProperty(termsType)) {
//             month =  day === 28 ? month + (expiryDate[termsType]-1): month + expiryDate[termsType]
//             if(month >= 13) {
//                 month -= 12; year++; 
//             }
//         }
        
        
//         //month나 day가 1자리수일 경우 앞에 0을 붙여준다.
//         month = String(month).length === 1? '0'+ month : month;
//         day = String(day).length === 1? '0'+ day :day;
        
//         newPrivacies.push(`${year}${month}${day}`);
//     }
    
//     for(let k in newPrivacies){
//         console.log(newPrivacies[k] , Number(today.split('.').join('')))
//         console.log(20211207 < 20211208)
//         if(Number(newPrivacies[k]) < Number(today.split('.').join(''))){
//             answer.push(parseInt(k)+1)
//         } 
//     }
//     return answer;
// }

function solution(today, terms, privacies) {
  const answer = [];

  // 들어온 today를 Date형식으로 바꿔줍니다.
  // YYYY.MM.DD 포멧도 지원해서 그냥 넣기만 하면 변환됩니다.
  const expire = new Date(today);

  // terms를 쉽게 찾기위해 객체화해줍니다.
  const termType = {};
  terms.forEach((item) => {
    // split() 메서드로 분리한 타입과 기간을
    // 구조 분해 할당으로 변수화 한다.
    const [type, term] = item.split(" ");

    // 타입에 기간이 얼만지 객체로 생성한다.
    // ex) 'A': 6
    termType[type] = Number(term);
  });

  // 개인정보 수집일자를 확인한다.
  privacies.forEach((item, idx) => {
    // 위와 마찬가지로 구조 분해 할당을 한다.
    const [date, type] = item.split(" ");

    // 구한 date는 new Date() 메서드를 통해 Date 형식으로 변환한다.
    const chDate = new Date(date);

    // 그리고 Date의 매서드인 setMonth를 이용해
    // chDate의 현재 달 + 타입의 기간을 더한 값을 구한다.
    chDate.setMonth(chDate.getMonth() + termType[type]);

    // 마지막으로 오늘 날짜와 구한 유효기간을 비교해
    // 유효기간이 오늘 보다 작거나 같으면 answer에 번호를 푸쉬해준다.
    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}