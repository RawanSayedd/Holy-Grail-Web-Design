function toggleNav() {
  //First, determine the html element, here its the outer container
  const outerGrid = document.querySelector(".outer-container");

  outerGrid.classList.toggle("outer-grid-expanded");
  //then, we need to do the exact same thing with nav in order to make it visible for hide-nav class
  const navBar = document.querySelector("nav");
  navBar.classList.toggle("hide-nav");
}

//STYLING THE NAV BAR ICON

var icons = document.querySelectorAll("#icon");

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.2)";
  });

  icons[i].addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}

//STYLING THE HEADER NAME/LOGO
var typedText = document.getElementById("style-header");
var text = "RAWAN";
var i = 0;

function type() {
  if (i < text.length) {
    typedText.innerHTML += text[i];
    i++;
    setTimeout(type, 200);
  }
}
type();
