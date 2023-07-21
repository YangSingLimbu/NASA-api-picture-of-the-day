//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getPic);
document.querySelector("button").addEventListener("touchstart", getPic);

function getPic() {
  document.querySelector("img").style.display = "block";
  let apiKey = "4oH3GPy5HI6hdnCOPcdOLMOKmgwBVTJrwdvrvteK";
  let apiURL = "https://api.nasa.gov/planetary/apod";
  let date = document.querySelector("input").value;

  fetch(`${apiURL}?api_key=${apiKey}&date=${date}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
