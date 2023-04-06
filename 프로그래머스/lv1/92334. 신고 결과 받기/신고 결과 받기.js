function solution(id_list, report, k) {
    //신고당한 횟수를 저장할 배열
    let report_count = Array(id_list.length).fill(0);
    //보낼 메일을 저장할 배열
    let mail_count = Array(id_list.length).fill(0);
    //정지되는 아이디를 저장할 배열
    let end_Id = [];
    
    //중복된 신고를 제거해준다
     const deduplication = [...new Set(report)];
    
    
    for(let i = 0; i< deduplication.length; i++){
        //신고한 사람
        const reporter = deduplication[i].split(' ')[0];
        //신고당한 사람
        const repotered =  deduplication[i].split(' ')[1];
        //신고당한 사람의 인덱스를 찾는다
        let index = id_list.indexOf(repotered);
        //신고당한 사람의 인덱스에 1씩 증가시킨다
        report_count[index] += 1;  
        //신고당한 아이디 인덱스가 k이상이면 정지될 아이디들 저장한다
        if(report_count[index] >= k){
            end_Id.push(id_list[index])
        }
        
    }
    //mail_count 리턴할 배열
    deduplication.forEach(i => {
        const reporter = i.split(' ')[0];
        const repotered =  i.split(' ')[1];
        
         //신고한 사람의 인덱스를 찾는다
        const index = id_list.indexOf(reporter);
         //신고당한 사람이 정지된 아이디가 있으면 true, 아니면 false
        const is_end = end_Id.includes(repotered);

        //신고한 사람이 정지된 아이디가 있으면 1을 더해주고 아니면 0을 더해준다. 
        mail_count[index] += is_end ? 1 : 0;
  });
   return mail_count

}