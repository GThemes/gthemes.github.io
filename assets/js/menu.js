var header = document.getElementById('menu');

var el = document.scrollingElement || document.documentElement;
if (el.scrollTop >= 5) {
    header.setAttribute("class", "gt-top-menu sm-left fixed white-bg")
}
document.addEventListener("scroll", function() {
    if (el.scrollTop >= 5) {
      header.classList.remove("transparent")
      header.classList.add("white-bg")
    } else {
      header.classList.add("transparent")
      header.classList.remove("white-bg")
    }
});
