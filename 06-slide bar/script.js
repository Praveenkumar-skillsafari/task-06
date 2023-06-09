let aside = document.querySelector("#aside ");
let toggleBtn = document.getElementById("bar-btn");
let xBtn = document.getElementById("x-btn");

toggleBtn.addEventListener("click", () => {
  aside.className = "anime";
});

xBtn.addEventListener("click", () => {
  aside.className = "error";
});
