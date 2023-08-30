const prices: (number | string)[] = [1, 2, 3, 4, 5];

prices.push(1);
prices.push("1");

let user: [string, number, boolean] = ["Aksa", 33, true];
// user = ["12", 23];

// user = [];
// user = ["aksa"];
// user = ["aksa", 33];
user = ["Aksa", 12, true];
const [userName, age] = user;
console.log(userName);
console.log(age);
