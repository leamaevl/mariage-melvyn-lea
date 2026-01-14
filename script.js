window.addEventListener("load", () => {
  const reveal = document.getElementById("reveal");

  if (!reveal) return;

  setTimeout(() => {
    reveal.classList.add("open");
  }, 300);

  setTimeout(() => {
    reveal.style.display = "none";
  }, 2600);
});
