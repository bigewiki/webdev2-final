//add the copyright date
document.getElementById(
  "copyright"
).innerHTML = `Copyright &copy; ${new Date().getFullYear()} The Rowdy Puppy`;

//initialize the menu as closed
let menuOpen = false;

//onclick event for the hamburger button
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("top-menu").style.display = menuOpen
    ? "none"
    : "block";

  //var for the ul
  const topMenuUl = document
    .getElementById("top-menu")
    .querySelector("#top-menu ul");

  menuOpen = !menuOpen;
});
