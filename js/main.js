let fact = document.querySelector("#fact");
let factText = document.querySelector("#fact-text");
let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("input", getFactFetch);

// function getFactAjax() {
//   let number = numberInput.value;
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://numbersapi.com/" + number);

//   xhr.onload = function() {
//     if (this.status == 200 && number != "") {
//       fact.style.display = "block";
//       factText.innerHTML = this.responseText;
//     }
//   };
//   xhr.send();
// }

// Make call to number api for data
function getFactFetch() {
  let number = numberInput.value;
  fetch("http://numbersapi.com/" + number)
    .then(response => response.text())
    .then(data => {
      if (number != "") {
        // input data into the ui
        fact.style.display = "block";
        factText.innerHTML = data;
      }
    })
    // catch any errors
    .catch(err => {
      console.log(err);
    });
}
