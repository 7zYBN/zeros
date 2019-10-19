module.exports = function zeros(expression) {
  const arr = expression.split('*');
  
  let zerosCount = 0;
  let fivesCount = 0;
  let twosCount = 0;
  
  for (let i = 0; i < arr.length; i++) {

    const indexOfFactorialSymbol = arr[i].indexOf('!');
    const step = arr[i].slice(indexOfFactorialSymbol).length;
    const number = Number(arr[i].slice(0, indexOfFactorialSymbol));

    for (let j = number % 2 + step; j <= number; j += step) {
      let factor = j;

      while (factor % 5 === 0 || factor % 2 === 0) {

        if (factor % 5 === 0) {
          factor /= 5;
          fivesCount++
        } else {
          factor /= 2;
          twosCount++;
        }
        
      }
    }
  }

  zerosCount += Math.min(fivesCount, twosCount);;

  return zerosCount;
}
