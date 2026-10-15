/*const product = {
  name: "socks",
  price: 1090,
  stock: "2 left",
};
console.log(product);
console.log(product.name);
console.log(product.stock);

product.name = "shoes";
console.log(product);
console.log(product.name);

product.color = "red";
console.log(product);

delete product.color;
console.log(product);
*/

const product_2 = {
  name: 'shirt',
  ['delivrey-time']: '1 day',
  rating:{
    starts: 4.5,
    count:87
  },
  fun: function function1() {
    console.log('fct inside object');
  } 
};

const json_String = JSON.stringify(product_2)
console.log(JSON.parse(json_String));
 
/*console.log(product_2);
console.log(product_2.name);
console.log(product_2["name"]);
/*ERROR_bcs . dot says *-* as minus and trying to do math
console.log(product_2.delivrey-time);*/
//console.log(product_2['delivrey-time']);
//product_2.fun.call();


