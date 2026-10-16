const product_1 = {
  name: "Basketball",
  price: 2095,
};
product_1["delivery-time"] = "3 days";

const product_2 = {
  name: "Football",
  price: 1095,
  ["delivery-time"]: "3 days",
};

const product_3 = {
  name: "shoes",
  price: 955,
  ["delivery-time"]: "3 days",
};

const product_4 = {
  name: "socks",
  price: 955,
  ["delivery-time"]: "3 days",
};

const product_5 = {
  name: "socks",
  price: 955,
  ["delivery-time"]: "3 days",
};

console.log(product_2);

console.log(product_1);
 
console.log(`the original price: ${product_1.price} \nThe new price is ${product_1.price +500}`);

console.log(product_1['delivery-time']);


function compare_price(product_1, product_2) {
  if (!(product_1.price > product_2.price)) {
    console.log(product_1);
    return;
  } 
  console.log(product_2);
  
}

compare_price(product_1, product_2);
compare_price(product_3, product_1);
compare_price(product_2, product_3);


function is_same_product(product_1, product_2) {
    if (!((product_1.name === product_2.name) &&
      product_1.price === product_2.price)) {
        console.log(false);
        return;   
    }
    console.log(true);
     
}

is_same_product(product_4, product_5);
is_same_product(product_4, product_2);

console.log('Good Morning'.toLowerCase());
console.log('Good Morning '.repeat(2));



