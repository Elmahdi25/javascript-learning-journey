const product = {
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
