//print 1~5
// let x = 0;
// while (x < 5) {
//   x++;
//   console.log(x);
// }

// let y = 1;
// while (y <= 5) {
//   console.log(y);
//   y++;
// }

// let odd = 1;
// let sum = 0;
// while (odd <= 10) {
//   if (odd % 2 === 1) {
//     console.log(odd);
//     sum += odd;
//   }
//   odd++;
// }
// console.log("Sum is", sum);

// let x = 1;
// let sum = 0;
// while (x <= 100) {
//   if (x % 5 === 0) {
//     sum += x;
//   }
//   x++;
// }
// console.log(sum);

let res = '';
for (let index = 1; index <= 5; index++) {
    res += index;
    if (index !== 5) {
        res += ',';
    }
}

console.log(res);
