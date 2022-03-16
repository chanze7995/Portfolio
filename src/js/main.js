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

// FILTER SIDE PROJECT GALLERY
const sideProjectFilters = document.querySelector(".sideProject__filters");
const sideProjectCard = document.querySelectorAll(".sideProject__card");

sideProjectFilters.addEventListener("click", (item) => {
  let filterItem = item.target;
  let activeItem = sideProjectFilters.querySelector(".active-item");
  let filterType = filterItem.getAttribute("data-name");
  const cardFilter = () => {
    sideProjectCard.forEach((card) => {
      let cardType = card.getAttribute("data-name");
      if (filterType == cardType || filterType == "all") {
        card.classList.remove("sideProject__card-hide");
      } else {
        card.classList.add("sideProject__card-hide");
      }
    });
  };

  if (filterItem.classList.contains("sideProject__item")) {
    activeItem.classList.remove("active-item");
    filterItem.classList.add("active-item");
    cardFilter();
  }
});
