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
const sideProjectFilters = document.querySelector(".side-project__filters");
const sideProjectCard = document.querySelectorAll(".side-project__card");

sideProjectFilters.addEventListener("click", (item) => {
  let filterItem = item.target;
  let activeItem = sideProjectFilters.querySelector(".active-item");
  let filterType = filterItem.getAttribute("data-name");
  const cardFilter = () => {
    sideProjectCard.forEach((card) => {
      let cardType = card.getAttribute("data-name");
      if (filterType == cardType || filterType == "all") {
        card.classList.remove("side-project__card-hide");
      } else {
        card.classList.add("side-project__card-hide");
      }
    });
  };

  if (filterItem.classList.contains("side-project__item")) {
    activeItem.classList.remove("active-item");
    filterItem.classList.add("active-item");
    cardFilter();
  }
});

// SCROLL SECTIONS TO ACTIVE NAVBAR
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionTop = current.offsetTop - 58;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute("id");
    const navbarBtn = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );
    if (sectionTop < scrollY && scrollY <= sectionTop + sectionHeight) {
      navbarBtn.classList.add("active-link");
    } else {
      navbarBtn.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// const navItem = document.querySelectorAll(".nav__link");
// const clickActive = (navId) => {
//   console.log(navItem);
//   navItem[navId].classList.add("active-link");
// };

// navItem.forEach((item, id) => {
//   item.classList.remove("active-link");
//   item.addEventListener("click", () => {
//     clickActive(id);
//   });
// });

//  THEME CHANGE
const themeButton = document.getElementById("theme-button");
const body = document.body;
const iconTheme = "bx-sun";
// Previously selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  body.classList.contains("theme-light") ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-sun" : "bx bx-moon";

// Validate user previously chose a topic
if (selectedTheme == "light") {
  body.classList.remove("theme-dark");
  body.classList.add("theme-light");
  themeButton.classList.toggle(iconTheme);
}

// The theme manually with the button
themeButton.addEventListener("click", () => {
  themeButton.classList.toggle(iconTheme);
  if (body.classList.contains("theme-dark")) {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  } else {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  }
  // Save the current theme and icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
