//CHANGE BACKGROUND OF HEADER
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// CONTROL MODAL OF SERVICES SECTION
const modalViews = document.querySelectorAll(".services__modal");
const modalOpenBtn = document.querySelectorAll(".services__button");
const modalCloseBtn = document.querySelectorAll(".services__modal");

const openModal = (modalId) => {
  modalViews[modalId].classList.add("active-modal");
};
const closeModal = (modalId) => {
  modalViews[modalId].classList.remove("active-modal");
};

modalOpenBtn.forEach((item, id) => {
  item.addEventListener("click", () => {
    openModal(id);
  });
});
modalCloseBtn.forEach((item, id) => {
  item.addEventListener("click", () => {
    closeModal(id);
  });
});
