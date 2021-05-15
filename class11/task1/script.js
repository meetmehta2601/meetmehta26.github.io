function jokes() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      var jokeResult = data.value;
      let joke = document.getElementById("joke");
      joke.innerHTML = jokeResult;
    });
}
jokes();
const button1 = document.getElementById("changeJoke");
button1.addEventListener("click", jokes);
button1.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.backgroundColor = "black";
    setTimeout(function () {
      event.target.style.backgroundColor = "chocolate";
    }, 500);
  },
  false
);
