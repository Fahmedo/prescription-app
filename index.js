const hambugerNav = () => {
  const hamBuger = document.querySelector(".ham-menu");
  const navOption = document.querySelector(".navbar");
  hamBuger.addEventListener("click", () => {
    navOption.style.display = "grid";
    navOption.style.display = "non";

    // console.log("Its out");
  });
};
hambugerNav();
