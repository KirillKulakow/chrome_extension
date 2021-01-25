const NavBar = () => {
  const NavBarButtons = {
      homeButton: document.getElementById("Home"),
      shopButton: document.getElementById("Shop"),
      corsButton: document.getElementById("Cors"),
    },
    { homeButton, shopButton, corsButton } = NavBarButtons,
    ViewPage = document.getElementById("ViewPage");

  let viewComponentClassName = "MainView";
  homeButton.firstElementChild.classList.add("active");

  const setPage = (className, element) => () => {
    if (viewComponentClassName !== className) {
      viewComponentClassName = className;
      ViewPage.className = className;
      for (let el in NavBarButtons) {
        NavBarButtons[el].firstElementChild.classList.remove("active");
      }
      element.firstElementChild.classList.add("active");
    }
  };

  homeButton.addEventListener("click", setPage("main-view", homeButton));
  shopButton.addEventListener("click", setPage("shop-view", shopButton));
  corsButton.addEventListener("click", setPage("cors-view", corsButton));
};

export default NavBar;
