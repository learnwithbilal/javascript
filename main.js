document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("select").onchange = function () {
    document.querySelector("h1").style.color = this.value;
  };
});
