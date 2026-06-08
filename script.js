function toggle(sectID) {
  var x = document.getElementById(sectID);
  var currentDisplay = window.getComputedStyle(x).display;
  if (currentDisplay === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}