// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('hello');

//temprature amplitude finder

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let high = 0;
let low = 0;
const calcTempAmp = function () {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] == 'error') {
      continue;
    } else if (temperatures[i] > high) {
      high = temperatures[i];
    } else if (temperatures[i] < low) {
      low = temperatures[i];
    }
  }
};
calcTempAmp();
console.log(`Amplitude in temprature is ${high - low}`);

console.log(temperatures);

console.log(`High temp is ${high} and low temp is ${low}`);
