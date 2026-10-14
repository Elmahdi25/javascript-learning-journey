function play_game(decision) {
  let computer_move = pick_computer_move();
  function pick_computer_move() {
    let computer_move = "";

    let random_nbr = Math.random();
    if (random_nbr >= 0 && random_nbr < 1 / 3) {
      computer_move = "rock";
    } else if (random_nbr >= 1 / 3 && random_nbr < 2 / 3) {
      computer_move = "paper";
    } else {
      computer_move = "scissors";
    }

    return computer_move;
  }

  let result = "";

  if (decision === "rock") {
    if (computer_move === "rock") {
      result = "Tie";
    } else if (computer_move === "paper") {
      result = "You Lose";
    } else {
      result = "You win";
    }
  } else if (decision === "paper") {
    if (computer_move === "rock") {
      result = "You Win";
    } else if (computer_move === "paper") {
      result = "Tie";
    } else {
      result = "You Lose";
    }
  } else {
    if (computer_move === "rock") {
      result = "You Lose";
    } else if (computer_move === "paper") {
      result = "You Win";
    } else {
      result = "Tie";
    }
  }

  let word1 = decision;
  let decision_capitalized = word1.charAt(0).toUpperCase() + word1.slice(1);

  let word2 = computer_move;
  let computer_move_capitalized =
    word2.charAt(0).toUpperCase() + word2.slice(1);

  alert(
    `You picked ${decision_capitalized}, Robot picked ${computer_move_capitalized}, ${result}`,
  );
}
