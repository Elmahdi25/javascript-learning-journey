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
let interval_id = "";
let is_auto_playing = false;

const auto_play_btn = document.querySelector(".auto_play");
const auto_play = () => {
  if (!is_auto_playing) {
    interval_id = setInterval(() => {
      const player_move = pick_robot_move();
      play(player_move);
    }, 1000);
    is_auto_playing = true;
  } else {
    clearInterval(interval_id);
    is_auto_playing = false;
  }
};

auto_play_btn.addEventListener("click", auto_play);

let rock = document.querySelector(".✊");
let paper = document.querySelector(".✋");
let scissors = document.querySelector(".✌️");

const play = (play_move) => {
  const robot_move = pick_robot_move();

  let result = "";

  if (play_move === '✊') {
    if (robot_move === "✊") {
      result = "Tie";
    } else if (robot_move === "✋") {
      result = "You Lose";
    } else {
      result = "You Win";
    }
  } else if (play_move === "✌️") {
    if (robot_move === "✊") {
      result = "You Lose";
    } else if (robot_move === "✋") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  } else {
    if (robot_move === "✊") {
      result = "You Win";
    } else if (robot_move === "✋") {
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
};
document.body.addEventListener('keydown', (event)=>{
  if (event.key === 'r' || event.key === 'R') {
    play('✊')
  } else if (event.key === "p" || event.key === "P") {
    play("✋");
  } else if (event.key === "s" || event.key === "S") {
    play("✌️");
  }
                                       
})
rock.addEventListener('click', ()=>{
  play('✊')
});
paper.addEventListener('click', ()=>{
  play("✋");
});
scissors.addEventListener('click', ()=>{
  play("✌️");
})
function update_score_element() {
  document.querySelector(".score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pick_robot_move() {
  let robot_move = "";
  let random_nbr = Math.random();

  if (random_nbr >= 0 && random_nbr < 1 / 3) {
    robot_move = '✊';
  } else if (random_nbr >= 1 / 3 && random_nbr < 2 / 3) {
    robot_move = '✋';
  } else {
    robot_move = '✌️';
  }

  return robot_move;
}

const reset_btn = document.querySelector(".reset");
const reset = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  clearInterval(interval_id);
  is_auto_playing = false;
  localStorage.removeItem("score");

  document.querySelector(".result").innerHTML = "";
  document.querySelector(".moves").innerHTML = "";

  update_score_element();
};

reset_btn.addEventListener("click", reset);
