<div align="center">

# ⚡ JavaScript Learning Journey

**Small exercises. New concepts. One step closer to building interactive websites.**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning_in_progress-blue?style=for-the-badge)

My practice repository as I learn JavaScript with **SuperSimpleDev**, following my HTML and CSS studies.

[Explore the lessons](#what-i-learned) · [Try it yourself](#how-to-use) · [Meet the author](https://github.com/Elmahdi25)

</div>

---

## About this repository

This is where I practice JavaScript, experiment with examples, and document what I understand along the way. My goal is to move from writing simple instructions to building interactive websites and solving problems independently.

**Current progress:** Chapters 01–03: JavaScript Basics, Numbers & Math, and Strings (through approximately **1:07:09**).

This repository is a learning journal that will grow as I continue the course.

## Chapter index

| Chapter | Topic | Status |
| --- | --- | --- |
| [01](#chapter-01--javascript-basics) | JavaScript Basics | Covered |
| [02](#chapter-02--numbers--math) | Numbers & Math | Covered |
| [03](#chapter-03--strings) | Strings | Covered |

Each chapter uses a stable two-digit number. Subsections use the same prefix, such as **03.1**, so new lessons can be added without renumbering earlier chapters.

## Preview

From my first popup to calculating a shopping total:

```js
alert('Hello!');

// Calculate prices in cents, then convert to dollars.
console.log((2095 + 799) / 100); // 28.94

// Round tax to the nearest cent before converting.
console.log(Math.round((2095 + 799) * 0.1) / 100); // 2.89
```

## Tools I use

| Tool | Purpose |
| --- | --- |
| JavaScript | Instructions, calculations, and page changes |
| HTML | The page that loads my JavaScript |
| VS Code | Writing and organizing my files |
| Browser DevTools | Trying expressions and checking errors |
| Git & GitHub | Tracking changes and sharing my progress |

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Entry page that loads the JavaScript file |
| `basics.js` | JavaScript practice and experiments |
| `3_strings/exersices.js` | String exercises (current local chapter file) |
| `README.md` | Learning notes and progress |

## How to use

1. Download the repository, or clone it using its GitHub **Code** button.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.
4. Press **F12** and select **Console** to inspect output and errors.
5. Edit the JavaScript file loaded by the page, save it, and refresh to try your changes.

No package installation is needed for these browser-based exercises.

To load the script after the HTML has been parsed, use this inside `<head>`:

```html
<script src="basics.js" defer></script>
```

## What I learned

## Chapter 01 — JavaScript Basics

### 01.1 Code, syntax, and the console

- **Code** is a set of instructions that a computer follows.
- **Running code** means executing those instructions.
- **Syntax** is the set of rules for writing valid code.
- JavaScript is **case-sensitive**: `innerHTML` and `innerHtml` are different names.
- The browser console lets me test small pieces of JavaScript immediately.

```js
alert('Hello');
alert('Good job!');
```

### 01.2 Changing a web page

```js
document.body.innerHTML = 'Hello';
```

This replaces the content inside the page's `<body>` with `Hello`. The body must exist before this instruction runs.

## Chapter 02 — Numbers & Math

### 02.1 Numbers and arithmetic

```js
2 + 2;  // 4 — addition
10 - 3; // 7 — subtraction
3 * 4;  // 12 — multiplication
10 / 2; // 5 — division
```

I learned the difference between **integers**, such as `2`, and **floating-point numbers**, such as `2.8`.

### 02.2 Order of operations

Multiplication and division happen before addition and subtraction. Parentheses let me control which calculation happens first.

```js
2 + 3 * 4;   // 14
(2 + 3) * 4; // 20
```

### 02.3 Calculating money

Some decimal numbers cannot be represented exactly by the computer:

```js
0.1 + 0.2; // 0.30000000000000004
```

For these shopping exercises, I calculate prices using integer cents and convert to dollars at the end.

```js
(2095 + 799) / 100; // 28.94
```

For a 10% tax, I round the calculated cents before converting:

```js
Math.round((2095 + 799) * 0.1) / 100; // 2.89
```

### 02.4 Rounding numbers

The course introduced `Math.round()`. I also explored rounding up, rounding down, and removing the decimal part.

| Method | Meaning | Example | Result |
| --- | --- | --- | --- |
| `Math.round()` | Round to the nearest integer | `Math.round(2.8)` | `3` |
| `Math.floor()` | Round down | `Math.floor(2.8)` | `2` |
| `Math.ceil()` | Round up | `Math.ceil(2.1)` | `3` |
| `Math.trunc()` | Remove the decimal part | `Math.trunc(2.8)` | `2` |

Negative numbers helped me understand the difference:

```js
Math.floor(-2.8); // -3
Math.ceil(-2.8);  // -2
Math.trunc(-2.8); // -2
```

### 02.5 Learning to find answers

I am practicing how to describe a problem clearly, search for the JavaScript feature I need, and test an example before using it. Understanding why the code works is part of the exercise.

## Chapter 03 — Strings

### 03.1 What is a string?

A **string** represents text. Numbers and strings are different value types.

```js
'Hello';
'123'; // A string, even though it contains digits.
123;   // A number.

typeof 'Hello'; // "string"
typeof 123;     // "number"
```

### 03.2 Concatenation

**Concatenation** means joining strings with `+`. Spaces must be included explicitly.

```js
'some' + 'text';           // "sometext"
'some' + ' ' + 'text';     // "some text"
'some' + ' more' + ' text'; // "some more text"
```

### 03.3 Strings, numbers, and type coercion

With a string operand, `+` joins text instead of adding numbers. JavaScript automatically converts the other number to a string: this is **type coercion**.

```js
'Hello ' + 3; // "Hello 3"
2 + 3;       // 5
'2' + 3;     // "23"
```

Addition and concatenation are evaluated from left to right:

```js
'$' + 5 + 3; // "$53"
5 + 3 + '$'; // "8$"
```

### 03.4 Parentheses before concatenation

Expressions involving strings follow the same order of operations. Expressions inside parentheses are evaluated first.

```js
'$' + (5 + 3); // "$8"

// Calculate in cents, then join the result to the text.
'$' + (2095 + 799) / 100; // "$28.94"

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100;
// "Items (2): $28.94"
```

### 03.5 Three ways to write strings

```js
'Hello'; // Single quotes.
"Hello"; // Double quotes.
`Hello`; // Backticks: a template literal (template string).
```

I use single quotes for simple text, double quotes when convenient for an apostrophe, and backticks for interpolation or multiline text.

```js
"I'm learning JavaScript";
```

### 03.6 Escape sequences

A backslash introduces an **escape sequence**. It lets me include special characters without ending the string.

| Sequence | Meaning |
| --- | --- |
| `\'` | Single quote |
| `\"` | Double quote |
| `\n` | New line |
| `\\` | Backslash |

```js
'I\'m learning JavaScript';
"He said: \"Hello!\"";
console.log('Hello\nJavaScript');
```

The last example prints:

```text
Hello
JavaScript
```

### 03.7 Template literals and interpolation

Backticks let me insert an expression directly into a string using `${...}`. This is **interpolation**.

```js
`Total cost: $${5 + 3}`; // "Total cost: $8"

`Items (${1 + 1}): $${(2095 + 799) / 100}`;
// "Items (2): $28.94"
```

In `$${5 + 3}`, the first `$` is ordinary text for the currency sign. The second `$` starts the `${...}` expression.

### 03.8 Multiline strings

Template literals can contain actual line breaks:

```js
console.log(`Hello
JavaScript`);
```

This prints two lines, just like `'Hello\nJavaScript'`.

### 03.9 Displaying strings: browser vs terminal

`alert()` creates a browser popup. It is not available in Node.js. `console.log()` works in both environments.

```js
// Browser popup:
alert(`Total cost: $${5 + 3}`);

// Browser console or Node.js terminal:
console.log(`Total cost: $${5 + 3}`);
```

### 03.10 Extra practice: two decimal places

I also explored `.toFixed(2)` to format prices. It rounds to two decimal places and returns a **string**.

```js
(6.786).toFixed(2); // "6.79"
(2.8).toFixed(2);   // "2.80"

`Total cost: $${((2095 + 799) / 100).toFixed(2)}`;
// "Total cost: $28.94"

Number((6.786).toFixed(2)); // 6.79 (a number)
```

Floating-point representation can affect rounding at some boundaries. For these money exercises, I keep calculations in cents and format the result for display at the end.

### 03.11 Chapter recap

- A string represents text; `typeof` identifies its type.
- `+` can add numbers or concatenate strings.
- Parentheses help calculate numbers before joining them to text.
- Single quotes, double quotes, and backticks create strings.
- Escape sequences represent quotes, line breaks, and backslashes.
- Template literals support interpolation and multiline text.
- `.toFixed(2)` returns rounded text with two decimal places.

## Problems I worked through

| Problem | What I learned |
| --- | --- |
| `Cannot set properties of null` when changing the body | Run the script after the body exists, using `defer` or placing the script before `</body>`. |
| `removeChild` reports that a node is not a child | The node must be a direct child of that parent; replacing `innerHTML` can also remove existing nodes. |
| Unexpected decimal results | Use integer cents for the price calculations in these exercises. |
| `alert is not defined` in the VS Code terminal | Node.js does not provide browser popups; use `console.log()` or run the script in a browser. |
| Getting `"$53"` instead of `"$8"` | Calculate with parentheses or interpolate the numeric expression in a template literal. |
| An apostrophe ends a string early | Use double quotes or escape the apostrophe with a backslash. |
| Choosing a rounding method | Decide whether I need the nearest integer, rounding down, rounding up, or truncation. |

## Next improvements

- [ ] Add Chapter 04 after completing the next lesson.
- [ ] Add more exercises and organize them by topic.
- [ ] Learn variables, conditions, functions, and loops.
- [ ] Practice targeting individual page elements.
- [ ] Build small interactive projects as I progress.

### Screenshots from exercises

![1](docs/1.png)

<br>

![2](docs/2.png)

<br>

![3](docs/3.png)

<br>

![4](docs/4.png)

<br>

![5](docs/5.png)

<br>

![6](docs/6.png)

<br>

![7](docs/7.png)




## Feedback and contributions

This is a personal learning repository. Suggestions, clear explanations, and feedback are welcome through GitHub issues. I want to understand improvements and practice applying them myself.

## Credits and license

Learning journal by **[Elmahdi Benabbou](https://github.com/Elmahdi25)**, following the JavaScript course by **Simon from [SuperSimple.dev](https://supersimple.dev)**.

The examples in this README summarize my current learning progress. Credit for the course and its teaching material belongs to SuperSimpleDev. No license is declared in this README.

## Support the project

If this learning journey helps you, a ⭐ or useful feedback is appreciated. You can follow my progress on **[GitHub](https://github.com/Elmahdi25)**.

---

<div align="center">

**Learning by doing — one JavaScript lesson at a time. ⚡**

</div>
