/*---------EX1-------------*/
let hello = document.querySelector(".hello").innerHTML;

let world_change = document.querySelector(".world");
world_change.innerHTML = "world change";
console.log(hello);

/*---------EX2-------------*/
function coin_flip(guess) {
  let heads = document.querySelector(".heads");
  let tails = document.querySelector(".tails");

  let choose = document.querySelector(".choose");
  if (guess === "heads") {
    choose.innerHTML = `You chose: ${guess}`;
  } else {
    choose.innerHTML = `You chose: ${guess}`;
  }
}
/*---------EX3-------------*/

function handle_enter_btn(event) {
  if (event.key === "Enter") {
    submit();
  }
}
function submit() {
  let name_input = document.querySelector(".name_input").value;
  document.querySelector(".your_name").innerHTML =
    `Your name is: ${name_input}`;
}

/*---------EX4-------------*/
function handle_enter_btn_2(event) {
  if (event.key === "Enter") {
    calculate();
  }
}
function calculate() {
  let price_input_2 =
    100 * Number(document.querySelector(".price_input_2").value);

  if (price_input_2 < 4000) {
    document.querySelector(".final_price_2").innerHTML =
      `$${(price_input_2 + 1000) / 100}`;
  } else {
    document.querySelector(".final_price_2").innerHTML =
      `$${price_input_2 / 100}`;
  }
}

function handle_btn() {
  let input_value = document.querySelector(".input_value").value;

  document.querySelector('.keyupp').innerHTML=input_value
  console.log(input_value);
  
}
