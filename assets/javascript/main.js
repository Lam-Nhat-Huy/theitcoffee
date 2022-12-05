let items = document.querySelectorAll(".item");
document.addEventListener("scroll", (event) => {
  items.forEach((item) => {
    if (item.offsetTop - window.screenY > 350) {
      item.classList.add("active");
      setTimeout(10000);
    }
  });
});
