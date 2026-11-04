let get_todo_values = localStorage.getItem("todo_list");
let todo_list = JSON.parse(get_todo_values) || [];

const add_button = document.querySelector(".add-button");
const add_task = () => {
  const todo_input = document.querySelector(".todo_input");
  const todo_value = todo_input.value;
  const date_input = document.querySelector(".date_input");
  const today = new Date();
  const date_value =
    date_input.value ||
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  let [year, month, day] = date_value.split("-");
  const formatted_date = `${day}/${month}/${year}`;

  todo_list.push({ name: todo_value, date: formatted_date });
  todo_input.value = "";
  date_input.value = "";
  localStorage.setItem("todo_list", JSON.stringify(todo_list));
  generate_HTML();
};
add_button.addEventListener("click", () => {
  add_task();
});

generate_HTML();
function generate_HTML() {
  let tasks_box = document.querySelector(".tasks_box");
  tasks_box.innerHTML = "";

  todo_list.forEach((object, index) => {
    object = todo_list[index];
    tasks_box.innerHTML += `
    <p>
        ${object.name}
        ${object.date}
        <button class="delete_btn") >Delete</button>
    </p>
      `;
    const delete_btns = document.querySelectorAll(".delete_btn");
    const delete_task = () => {
      todo_list.splice(index, 1);
      localStorage.setItem("todo_list", JSON.stringify(todo_list));
      generate_HTML();
    };
    delete_btns.forEach((delete_btn, index) => {
      delete_btn.addEventListener("click", () => {
        delete_task();
      });
    });
  });
}

function handle_enter_btn(event) {
  if (event.key === "Enter") {
    add_task();
  }
}
