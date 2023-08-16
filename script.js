function toggleNav() {
  //First, determine the html element, here its the outer container
  const outerGrid = document.querySelector(".outer-container");

  outerGrid.classList.toggle("outer-grid-expanded");
  //then, we need to do the exact same thing with nav in order to make it visible for hide-nav class
  const navBar = document.querySelector("nav");
  navBar.classList.toggle("hide-nav");
}
