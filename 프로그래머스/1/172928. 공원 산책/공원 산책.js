function solution(park, routes) {
    const height = park.length - 1; //공원 세로 길이 
    const width = park[0].length - 1; //공원 가로 길이 
    
  let row = park.findIndex((s) => s.includes("S"));
  let col = park[row].indexOf("S");

  routes.forEach((position) => {
    const way = position[0];
    const distance = position[2];

    let tempRow = row;
    let tempCol = col;
    let flag = true;

    for (let i = 0; i < Number(distance); i++) {

      if (way === "E") tempCol++;
      else if (way === "W") tempCol--;
      else if (way === "S") tempRow++;
      else if (way === "N") tempRow--;

      if (
        tempRow > height ||
        tempRow < 0 ||
        tempCol > width ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        flag = false;
        break;
      }
    }
    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  return [row, col];

}