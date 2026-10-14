# Rock Paper Scissors ✊✋✌️

I built this game by myself after learning **booleans, if/else statements, and functions** in JavaScript.

⏱️ **Time spent:** 2 hours and 30 minutes.

## How It Works

- The player chooses Rock, Paper, or Scissors.
- The computer randomly picks a move.
- The game compares both moves and displays the result in an alert.

## A Mistake That Helped Me Learn

During development, I got this message:

> You picked Scissors, Robot picked undefined, You Lose

I had forgotten to store the value returned by `pick_computer_move()` in the variable used in my alert.

After fixing it, I understood these two steps better:

1. Use `return` to send a value back from a function.
2. Capture that returned value in a variable so I can use it later.

Finding and fixing this mistake myself helped me understand functions, return values, and variable scope.

## Technologies

- HTML
- CSS
- JavaScript