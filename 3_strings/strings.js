console.log('hello');
console.log("some" + "text");
console.log("some" + " text");
console.log(typeof 2);
console.log(typeof '2');
/*-----------*/ 
console.log( typeof "hello" + 3);
console.log("$" + (20.95 + 7.99).toFixed(2));
console.log((20.95 + 7.99).toFixed(2) + "$");
console.log('$' + (2095 +799) /100);
/*-----Strings follow Always the rule of operator as number bracket are Always cacultaed first
------*/
console.log("Items(" +( 1 + 1 )+ "): $" + (2095 + 799) / 100);

console.log(`Items(${1 + 1}):  $${(2095 + 799) / 100}`);
/*Multi-line-string only available on template strings*/

console.log(`Items(${1 + 1}):  
$${(2095 + 799) / 100}`);

 