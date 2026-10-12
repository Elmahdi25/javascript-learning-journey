/**-----------EX1-----------**/
console.log("My name is: ");
console.log("Elmahdi Benabbou");
console.log("My name is " + "Elmahdi Benabbou");

/**-----------EX2-----------**/
console.log("1 coffee:5$");
console.log("1 bagel:3$");

console.log(`Total cost: $${5 + 3}`);
console.log("Total cost: $" + (5 + 3));

/**-----------EX3-----------**/
console.log("1 coffee: 5.99$");
console.log("1 bagel: 2.95$");
console.log(`Total cost: $${(599 + 295) / 100}`);

/**-----------EX4-----------**/
console.log(`Total cost: $${(599 + 295) / 100} 
Thank you, come again :)
`);

/**-----------EX4-----------**/
console.log(`Items(${2 + 2}): $${(2 * (2095 + 799)) / 100}`);
console.log(`Shipping & handling: $${(2 * 499) / 100}`);
console.log(`Total before tax: $${(2 * (2095 + 799 + 499)) / 100}`);
console.log(
  `Estimated tax (10%): $${((2 * (2095 + 799 + 499) * 0.1) / 100).toFixed(2)}`,
);
console.log(
  `Order total: $${((2 * (2095 + 799 + 499) + (2 * (2095 + 799 + 499) * 0.1) )/ 100).toFixed(2)}`,
);
