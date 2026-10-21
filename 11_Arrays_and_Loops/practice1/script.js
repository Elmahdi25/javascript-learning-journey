/*PRACTICE ONE*/
let todo_array = [];

function add_btn() {
  let todo_value = document.querySelector(".todo_value");
  todo_array.push(todo_value.value);
  todo_value.value = "";
  console.log(todo_array);
}

function handle_enter_btn(event) {
  if (event.key === "Enter") {
    add_btn();
  }
}


/*PRACTICE TWO */