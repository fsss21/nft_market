// let result = null;

// result--;

// console.log(result, typeof result);

// const result = prompt("how older you");

// // result = 80;

// console.log(result);

let openModalButton = document.querySelector(".sign_up_b");
let modal = document.querySelector(".modal-register");
let closeButton = document.querySelector(".modal-register__close");

openModalButton.addEventListener("click", () => {
  modal.classList.add("active-modal");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});
