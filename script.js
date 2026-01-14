window.addEventListener("load", () => {
  const reveal = document.getElementById("reveal");

  setTimeout(() => {
    reveal.classList.add("open");
  }, 300);

  setTimeout(() => {
    reveal.remove();
  }, 2600);
});
