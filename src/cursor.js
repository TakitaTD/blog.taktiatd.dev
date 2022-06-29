export default function () {
  // window.addEventListener("scroll", (e) => console.log(window.scrollY));
  window.addEventListener("mousemove", (e) => {
    document.querySelector(".cursor").style.top = `${
      e.clientY + window.scrollY
    }px`;
    document.querySelector(".cursor").style.left = `${e.clientX}px`;
  });
  window.addEventListener("mousedown", () => {
    document.querySelector(".cursor").style.backgroundColor =
      "rgba(205, 207, 69, 0.8)";
    document.querySelector(".cursor").style.width = "6rem";
    document.querySelector(".cursor").style.height = "6rem";
  });
  window.addEventListener("mouseup", () => {
    document.querySelector(".cursor").style.backgroundColor =
      "rgba(255, 255, 255, 0.1)";
    document.querySelector(".cursor").style.width = "5rem";
    document.querySelector(".cursor").style.height = "5rem";
  });
}
