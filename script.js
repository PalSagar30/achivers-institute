
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);


})

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });


  navLi.forEach((li) => {
    li.classList.remove("active");
    console.log(li.classList.contains(current))
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}
function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}






