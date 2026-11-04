console.log("EX------1");
const add = (nbr1, nbr2) => {
  console.log(nbr1 + nbr2);
};

add(2, 3);
add(7, 1);

/*-----------------------------------*/
console.log("EX------2");
function run_twice(fun) {
  fun();
  fun();
}

const add_2 = (a, b) => {
  console.log(a + b);
};

run_twice(() => {
  console.log("hello twice");
});

run_twice(() => {
  add_2(2, 3);
});
/*-----------------------------------*/
console.log("EX------3");
/*    <button class="start" onclick="start()">Start</button>*/
function start() {
  const start_btn = document.querySelector(".start");
  if (start_btn.innerHTML === "Finished!") {
    start_btn.innerHTML = "Start";
  } else {
    start_btn.innerHTML = "Loading...";
    setTimeout(() => {
      start_btn.innerHTML = "Finished!";
    }, 3000);
  }
}

console.log('EX------4');
        let timeout_id;
        function add() {
            const added = document.querySelector('.added');
            added.innerHTML = 'Added';
            clearTimeout(timeout_id)
            timeout_id = setTimeout(() => {
                added.innerHTML = ""
            }, 2000)
            
        }
