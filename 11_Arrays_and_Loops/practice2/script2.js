function handle_enter_btn(event) {
  if (event.key === "Enter") {
    add_btn();
  }
}

const todoList = [];

function render_todoList() {
  const div_element = document.querySelector(".tasks");
  div_element.innerHTML = "";
  console.log(todoList);
  for (let i = 0; i < todoList.length; i++) {
    const todo_values = todoList[i];
    div_element.innerHTML += `<li> ${todo_values} </li>`;
  }
}
function add_btn() {
  const input_element = document.querySelector(".input_element");
  todoList.push(input_element.value);
  input_element.value = "";
  render_todoList();
}
/*dima nkhliha FR7ANA
ndir ay 7aja 3la 9blha bl MAXIMUM li3ndi
libghatha ndirha liha
nsb9haaa 3la rasi dima*/
