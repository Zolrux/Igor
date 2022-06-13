const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const headerBurger = document.querySelector(".header__burger");
const headerList = document.querySelector(".header__list");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerList.classList.toggle("active");
  document.body.classList.toggle("scroll-false");
});

const pageMainLabels = document.querySelectorAll(".body-page-main__label");
const pageMainTexts = document.querySelectorAll(".body-page-main__text");
const pageMainLists = document.querySelectorAll(".body-page-main__list");

pageMainLabels.forEach((pageMainLabel, i) => {
  pageMainLabel.addEventListener("click", () => {
    const pageMainLinks = pageMainLists[i].querySelectorAll(".body-page-main__link");

    pageMainLists[i].classList.toggle("active");
    pageMainLabel.classList.toggle("active");

    pageMainLabels.forEach((pageMainLabelUnActive, j) => {
      if (i !== j) {
        pageMainLists[j].classList.remove("active");
        pageMainLabelUnActive.classList.remove("active");
      }
    });

    pageMainLinks.forEach((pageMainLink) => {
      pageMainLink.addEventListener("click", (e) => {
        e.preventDefault();
        pageMainTexts[i].innerHTML = pageMainLink.innerHTML;
        pageMainLists[i].classList.remove("active");
        pageMainLabel.classList.remove("active");
      });
    });
  });
});
