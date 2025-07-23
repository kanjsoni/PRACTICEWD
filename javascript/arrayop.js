let first = [1, 3, 5, 8, 9];
let second = [6, 7, 4, 3, 4];

// merging two array

let combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(2, 5);
console.log(sliced);


// emptying an array

let num = [1, 4, 6, 4, 7];
let nums = num;
console.log(num);
console.log(nums);
// 1st method
nums = [];
console.log(num);
console.log(nums);

// 2nd method 

num.length = 0;
console.log(num);
console.log(nums);

let num2 = [2, 5, 6, 3, 6];
let num3 = num2;

// 3rd method
num2.slice(0, num2.length);
console.log(num2);
console.log(num3);

function sum (a, val, ...args){
    console.log((args));
    let s = a+ val;
    console.log(s);
}

sum(1,4,5,3,5,3,9,8);
