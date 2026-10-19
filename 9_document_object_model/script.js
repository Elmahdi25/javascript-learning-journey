/*EX----------------------------------------1*/
let subscribe_btn = document.querySelector(".subscribe-btn");
function change_subscribe_btn() {
  if (subscribe_btn.innerText === "Subscribe") {
    subscribe_btn.innerText = "Subscribed";
  } else {
    subscribe_btn.innerText = "Subscribe";
  }
}

/*EX----------------------------------------2*/

let get_score = localStorage.getItem("score");
let js_score_object = JSON.parse(get_score);
let score = js_score_object;
/*if (!score) short cut for score === null bcs null it s a falsy value*/
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

function play(play_move) {
  const robot_move = pick_robot_move();

  let result = "";

  if (play_move === "rock") {
    if (robot_move === "rock") {
      result = "Tie";
    } else if (robot_move === "paper") {
      result = "You Lose";
    } else {
      result = "You Win";
    }
  } else if (play_move === "scissors") {
    if (robot_move === "rock") {
      result = "You Lose";
    } else if (robot_move === "paper") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  } else {
    if (robot_move === "rock") {
      result = "You Win";
    } else if (robot_move === "paper") {
      result = "Tie";
    } else {
      result = "You Lose";
    }
  }

  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }
  /*******************************************************/
  let score_json = JSON.stringify(score);
  localStorage.setItem("score", score_json);
  /*******************************************************/

  document.querySelector(".result").innerHTML = result;

  document.querySelector(".moves").innerHTML =
    `You ${play_move} - ${robot_move} Computer`;

  update_score_element();
}

function update_score_element() {
  document.querySelector(".score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pick_robot_move() {
  let robot_move = "";
  let random_nbr = Math.random();

  if (random_nbr >= 0 && random_nbr < 1 / 3) {
    robot_move = "rock";
  } else if (random_nbr >= 1 / 3 && random_nbr < 2 / 3) {
    robot_move = "paper";
  } else {
    robot_move = "scissors";
  }

  return robot_move;
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  document.querySelector(".result").innerHTML = "";
  document.querySelector(".moves").innerHTML = "";

  update_score_element();
}

/*EX----------------------------------------3*/

function handle_enter_btn(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}

function calculate() {
    let cost_order = Number(document.querySelector('.cost_order').value);
    
    let final_price = document.querySelector('.final_price');
    if (cost_order <40) {
        final_price.innerHTML = `$${cost_order + 10}`;
    } else{
        final_price.innerHTML = `$${cost_order}`;
    }
}