let openModalButton = document.querySelector(".sign_up_b");
let modal = document.querySelector(".modal-register");
let closeButton = document.querySelector(".modal-register__close");

openModalButton.addEventListener("click", () => {
  modal.classList.add("active-modal");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});

const button = document.querySelector(".theme");
button.onclick = () => {
  document.body.classList.toggle;
};

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const elements = document.querySelectorAll(".smooth");

elements.forEach((item) => {
  let lastScrollPos = 0;
  const scrollThreshold = 50;

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    if (Math.abs(currentScrollPos - lastScrollPos) >= scrollThreshold) {
      const isVisible = isElementInViewport(item);
      isVisible
        ? item.classList.add("smooth--active")
        : item.classList.remove("smooth--active");
      lastScrollPos = currentScrollPos;
    }
  });
});
