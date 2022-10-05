// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

const amounts = [61.00, 52.25, 112.99, 5.00]; 
let total = 0;
for (let amount of amounts) {
  console.log(amount);
  total += amount; // total = total + amount
}
console.log('Order total is: ', total);
