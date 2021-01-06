//alert('JavascriptLinked');

const following = () => {

let b = document.getElementById('follow');

b.innerHTML = "Following";

}

const searching = () => {

let c = document.getElementById('search');
let d = document.getElementById('searching');
c.style.display = "none";
d.style.display = "inline";
}

const connectApi = function() {

let a = document.getElementById('invest');

a.innerHTML = "Connecting to API";

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title);
      a.innerHTML = "Connected";
    })
  } else {
    console.log('error')
  }
}

request.send()
}