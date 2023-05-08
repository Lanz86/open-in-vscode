const fileNavigation = document.querySelector(".file-navigation");
if (fileNavigation) {
  var buttonTextEl = document.createElement("a");
  buttonTextEl.className = "btn ml-2 d-none d-md-block";
  buttonTextEl.innerText = "Open in VSCode";
  buttonTextEl.href = window.location.href.replace(
    "github.com",
    "github1s.com"
  );
  buttonTextEl.target = "_blank";
  fileNavigation.appendChild(buttonTextEl);
}
