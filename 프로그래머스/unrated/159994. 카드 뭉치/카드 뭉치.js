function solution(cards1, cards2, goal) {
  const goalLength = goal.length;

      for (let i = 0; i < goalLength; i++) {
        if (goal[0] === cards1[0]) {
          goal.shift();
          cards1.shift();
        }

        if (goal[0] === cards2[0]) {
          goal.shift();
          cards2.shift();
        }
      }

      if (goal[0] === undefined) {
        return "Yes";
      }

  return "No";
}