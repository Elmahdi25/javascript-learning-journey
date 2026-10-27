console.log("---EX-1---");

function found_search(search_array, word) {
  let result = "";
  let lower_case_array = [];
  for (let i = 0; i < search_array.length; i++) {
    const element = search_array[i].toLowerCase();
    const lower_case_word = word.toLowerCase();

    lower_case_array.push(element);
    if (lower_case_array[i] === lower_case_word) {
      result = i;
      break;
    } else {
      result = -1;
      continue;
    }
  }
  console.log(result);
}
let list_1 = ["Elmahdi", "SARA", "search", "abdo", "Search"];
let list_2 = ["Elmahdi", "SARA", "abdo", "search"];
let list_3 = ["Elmahdi", "SARA", "abdo"];
let list_4 = ["Elmahdi", "SARA", "abdo", "yamaha", "Search"];
let list_5 = ["Elmahdi", "SARA", "SEARCH", "abdo", "yamaha", "sara"];

found_search(list_1, "search");
found_search(list_2, "Elmahdi");
found_search(list_3, "elmaHDI");
found_search(list_4, "sara");
found_search(list_4, "yellow");
found_search(list_5, "saRa");

console.log("---EX-1-Method*2*--");
function finde_index(array, word) {
  let xx = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!(element === word)) {
      xx = -1;
    } else {
      xx = i;
      break;
    }
  }
  console.log(xx);
}
const list_0 = ["red", "yellow", "bleu", "green", "yellow"];
finde_index(list_0, "yellow");

console.log("---EX-2---");
function remove_egg(food_array) {
  let array_no_egg = [];
  let egg_counter = 0;
  for (let i = 0; i < food_array.length; i++) {
    const element = food_array[i];
    if (element === "egg") {
      egg_counter++;
      if (egg_counter <= 2) {
        continue;
      } else {
        array_no_egg.push(element);
      }
    } else {
      array_no_egg.push(element);
    }
  }

  console.log(array_no_egg);
}

const list_6 = ["egg", "apple", "egg", "egg", "tomato"];
const list_7 = ["apple", "egg", "onion", "egg", "egg", "tomato"];
const list_8 = [
  "apple",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "egg",
  "onion",
  "egg",
  "egg",
  "tomato",
];
remove_egg(list_6);
remove_egg(list_7);
remove_egg(list_8);

console.log("---EX-3---");
function remove_last_2_eggs(food_array) {
  let reversed_array = food_array.reverse();
  let result = [];
  let egg_counter = 0;
  for (let i = 0; i < food_array.length; i++) {
    const element = food_array[i];
    if (element === "egg" && egg_counter <= 1) {
      egg_counter++;
      continue;
    } else {
      result.push(element);
    }
  }
  result.reverse();

  console.log(result);
}

const list_9 = ["apple", "egg", "onion", "egg", "tomato", "egg", "egg"];
const list_10 = ["apple", "egg", "onion"];

const list_11 = ["egg", "apple", "egg", "egg", "ham"];
const list_12 = [
  "egg",
  "apple",
  "egg",
  "egg",
  "ham",
  "egg",
  "egg",
  "egg",
  "tomato",
];

remove_last_2_eggs(list_9);
remove_last_2_eggs(list_10);
remove_last_2_eggs(list_11);
remove_last_2_eggs(list_12);

console.log("---EX-4---");
/* USING SLICE FOR MAKING  ACOPY OF THE ORIGINAL ARRAY*/
function remove_last_2eggs(foods_array) {
  let reversed_array = foods_array.slice();
  reversed_array.reverse();
  let result = [];
  let egg_counter = 0;
  for (let i = 0; i < reversed_array.length; i++) {
    const element = reversed_array[i];
    if (element === "egg" && egg_counter <= 1) {
      egg_counter++;
      continue;
    } else {
      result.push(element);
    }
  }

  result.reverse();
  console.log(foods_array);
  console.log(reversed_array);
  console.log(result);
}
const lis_12 = ["egg", "apple", "egg", "egg", "ham", "tomato"];
remove_last_2eggs(lis_12);

console.log("---EX-5---");
let nums = [];
let new_nums = [];
let x = "";
for (let i = 1; i <= 30; i++) {
  nums.push(i);
  for (let j = 0; j < nums.length; j++) {
    let element = nums[j];
    if (element % 3 === 0 && element % 5 === 0) {
      element = "FizzBuzz";
    } else if (element % 5 === 0) {
      element = "Buzz";
    } else if (element % 3 === 0) {
      element = "Fizz ";
    }
    x = element;
  }
  new_nums.push(x);
}
console.log(nums);
console.log(new_nums);



console.log("---EX-6---");

function find_index(array, word) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === word) {
      index = i;
    } else {
      index;
    }
  }
  return index;
}

const list = ["green", "red", "green", "red", "yellow"];
//find_index(list, 'red');

function unique(array) {
  let unique_words = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (find_index(unique_words, element) === -1) {
      unique_words.push(element);
    }
  }
  console.log(unique_words);
}
const list_32 = ["green", "red", "green", "red", "yellow"];
unique(list_32);