/*EX--1*/
const nums = [10, 20, 30];
console.log(nums);

nums[2] = 99;
console.log(nums);

/*EX--2*/
const list_1 = [10, 20, 30];
const list_2 = ["Elmahdi", "jack", "Luft"];
function getLastValue(array) {
  const lastIndex = array.length - 1;
  const last_index_value = array[lastIndex];
  console.log(last_index_value);
}

getLastValue(list_1);
getLastValue(list_2);

/*EX--3*/
function array_swap(array) {
  const last_index = array.length - 1;
  let last_index_value = array[last_index];
  let first_index_value = array[0];

  array[0] = last_index_value;
  array[last_index] = first_index_value;

  console.log(array);
}
const list_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list_4 = ["Hello", "Elmahdi", "Good bye"];
array_swap(list_3);
array_swap(list_4);

/*EX--4 FOOR-LOOP*/
console.log("----------EX--4--------");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*EX--5- FOOR-LOOP*/
console.log("-----EX--5-------------");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

/*EX--6- WHILE-LOOP*/
console.log("------EX--6------------");

let i = -2;
while (i < 10) {
  i += 2;
  console.log(i);
}

/*EX--7- WHILE-LOOP*/
console.log("-------EX--7----------");
let index = 5;
while (index >= 0) {
  console.log(index);
  index--;
}
/*EX--8- WHILE-LOOP*/
console.log("-------EX--8----------");

function array_add_one_by_value(array) {
  const new_array = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i] + 1;
    new_array.push(element);
  }
  console.log(new_array);
}
let list_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list_6 = [15, 20, 7, 77, 101, 87, 99, 12.5, 30, -2];
array_add_one_by_value(list_5);
array_add_one_by_value(list_6);

/*EX--9- WHILE-LOOP*/
console.log("-------EX--9----------");
function add_num(array, num) {
  const new_array = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i] + num;
    new_array.push(element);
  }
  console.log(new_array);
}

let list_7 = [1, 2, 3];
let list_8 = [2.65, 101, 44];
let list_9 = [-8, -1, 0];
add_num(list_7, 2);
add_num(list_8, 8);
add_num(list_9, 5.5);
/*EX--10- WHILE-LOOP*/
console.log("-------EX--10----------");

function add_arrays(array_1, array_2) {
  const new_array = [];
  for (let i = 0; i < array_1.length; i++) {
    const element = array_1[i] + array_2[i];
    new_array.push(element);
  }
  console.log(new_array);
}

const list_10 = [2, 2, 6];
const list_11 = [2, 2, 6];
add_arrays(list_10, list_11);

/*EX--11- WHILE-LOOP*/
console.log("-------EX--11----------");
function count_positive(nums) {
  let count_positive_nbr = "";
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 0) {
      count_positive_nbr++;
    }
  }
  console.log(count_positive_nbr);
}

const list_12 = [1, -3, 5];
const list_13 = [1, -3, 5, 20, 8, -9, -23.02, 9.3, 45, 101];
count_positive(list_12);
count_positive(list_13);

/*EX--12- WHILE-LOOP*/
console.log("-------EX--12----------");
function min_max(nums) {
  let min_max_object = {
    min: nums[0],
    max: nums[0],
  };
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (min_max_object.min < element) {
      min_max_object.min = element;
    } else if (min_max_object.max > element) {
      min_max_object.max = element;
    }
  }
  console.log(min_max_object);
}
const list_14 = [1, 7, -3, 5, 9];
const list_15 = [-2, 3, -5, 7, 10];
const list_16 = [-23254, 0];
min_max(list_14);
min_max(list_15);
min_max(list_16);

/*EX--13- WHILE-LOOP*/
console.log("-------EX--13----------");
function min_max_2(nums) {
  let min_max_object = { min: null, max: null };
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (min_max_object.min === null || min_max_object.min < element) {
      min_max_object.min = element;
    }
    if (min_max_object.max === null || min_max_object.max > element) {
      min_max_object.max = element;
    }
  }
  console.log(min_max_object);
}

const list_17 = [2, 2];
const list_18 = [8];
const list_19 = [];
min_max_2(list_17);
min_max_2(list_18);
min_max_2(list_19);
