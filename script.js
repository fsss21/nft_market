// let result = null;

// result--;

// console.log(result, typeof result);

// const result = prompt("how older you");

// // result = 80;

// console.log(result);

// let openModalButton = document.querySelector(".sign_up_b");
// let modal = document.querySelector(".modal-register");
// let closeButton = document.querySelector(".modal-register__close");

// openModalButton.addEventListener("click", () => {
//   modal.classList.add("active-modal");
// });

// closeButton.addEventListener("click", () => {
//   modal.classList.remove("active-modal");
// });

// let age = +prompt("How old are you?");

// if (!age) {
//   alert("Please enter your age.");
// } else if (age > 18) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }
// let accessAllowed = false;
// let age = prompt("how older you?");
// if (age < 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt("how older you?");

// let isPermis = age >= 18 ? true : false;
// while (true) {
// alert("you ebaniy pidoras");
// }
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// let day = prompt("what day is today?");

// switch (day) {
//   case "Monday":
//     console.log("Понедельник");
//     break;
//   case "Tuesday":
//     console.log("Вторник");
//     break;
//   case "Wednesday":
//     console.log("Среда");
//     break;
//   case "Thursday":
//     console.log("Четверг");
//     break;
//   case "Friday":
//     console.log("Пятница");
//     break;
//   case "Saturday":
//     console.log("Суббота");
//     break;
//   case "Sunday":
//     console.log("Воскресенье");
//     break;
//   default:
//     console.log("Неизвестный день");
//     break;
// }

while (true) {
  let operator = prompt("Введите оператор (+, -, *, /) или 'exit' для выхода:");

  if (operator === "exit") {
    break;
  }

  let num1 = +prompt("Введите первое число:");
  let num2 = +prompt("Введите второе число:");
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log("Результат сложения:", result);
      break;
    case "-":
      result = num1 - num2;
      console.log("Результат вычитания:", result);
      break;
    case "*":
      result = num1 * num2;
      console.log("Результат умножения:", result);
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
        console.log("Результат деления:", result);
      } else {
        console.log("Деление на ноль невозможно.");
      }
      break;
    default:
      console.log("Недопустимый оператор");
  }
}
