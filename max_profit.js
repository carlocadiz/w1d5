function maxProfit(arr) {
  var outer = 0;
  var inner = 1;
  var curProfit = -1;
  var highProfit = -1;

  while(outer < arr.length){
    while( inner <= arr.length -1){
      if (arr[outer] - arr[inner] < curProfit){
        highProfit = arr[outer] - arr[inner];
        curProfit = highProfit;
      }
    inner++;
    }
    outer++;
    inner= outer + 1;
  }
  return Math.abs(highProfit);
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));