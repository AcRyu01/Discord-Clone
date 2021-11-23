let e = document.getElementById("closeBtn"),
  t = document.getElementById("menuToggle"),
  n = document.getElementById("mobileMenu");
t.addEventListener("click", () => {
  (n.style.visibility = "visible"), (n.style.display = "flex");
}),
  e.addEventListener("click", () => {
    (n.style.visibility = "hidden"), (n.style.display = "none");
  });
