  function solution(word) {
    let answer = 0;
    let count = 0;

    const aeiou = ["A", "E", "I", "O", "U"];
    const arr = [];
  
    function search() {
      if (arr.length === 5 && arr.join("") !== word) {
        return;
      }
      if (arr.join("") === word) {
        answer = count;
        return;
      }

      for (let i = 0; i < 5; i++) {
        arr.push(aeiou[i]);
        count++;
        search();
        arr.pop();
      }
    }
    search();
    return answer;
  }