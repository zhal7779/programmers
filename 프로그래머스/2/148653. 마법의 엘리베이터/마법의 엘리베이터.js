function solution(storey) {
    let count = 0;

    while (storey > 0) {
        let lastDigit = storey % 10;
        let nextDigit = Math.floor(storey / 10) % 10;

        if (lastDigit > 5 || (lastDigit === 5 && nextDigit >= 5)) {
            storey += 10 - lastDigit; 
            count += 10 - lastDigit;
        } else {
            storey -= lastDigit; 
            count += lastDigit;
        }

        storey = Math.floor(storey / 10); 
    }

    return count;
}
