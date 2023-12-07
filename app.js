let len = document.querySelectorAll(".keys").length;

for (let i = 0; i < len; i++) {
  document.querySelectorAll("key")[i].addEventListener("click", handleClick);
}
