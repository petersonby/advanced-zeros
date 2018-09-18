module.exports = function getZerosCount(number, base) {
  const arr = [];

  let newBase = base;
  let i = 2;

  while(newBase > 1) {
    if (newBase % i === 0) {
	  newBase /= i;
	  arr.push(i);
    } else i++;
  }

  let uniqueVal = [];
  let uniqueNum = [];
  let prev;

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] !== prev ) {
      uniqueVal.push(arr[i]);
      uniqueNum.push(1);
    } else {
      uniqueNum[uniqueNum.length-1]++;
    }
  
    prev = arr[i];
  }

  let count = [];
  
  for (let i = 0; i < uniqueVal.length; i++) {
  	let pow = 2;
    let sortPow = uniqueVal[i];
    count[i] = 0;

    while ((number - sortPow) > 0) {

      count[i] += Math.floor(number / sortPow);
  	  sortPow = Math.pow(uniqueVal[i], pow);
  	  pow++;

    }

    count[i] = Math.floor(count[i] / uniqueNum[i]);
  }
  
  count.sort((a,b) => a-b);
  
  return count[0];
}