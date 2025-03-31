function myFunction() {
  document.getElementById("first").innerHTML = "text changes";
}
let name = document.querySelector("#input_here");
document
  .getElementById("changes")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let inputValue = document.getElementById("changes").value;
      name.innerHTML = "Hello !" + inputValue;

      document.getElementById("changes").value = "";
    }
  });

  /*color changes of text using js */
  document.getElementsByTagName('h1')[0].style.color = 'lightblue';