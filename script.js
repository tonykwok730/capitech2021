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

const deploy = function() {

var request = new XMLHttpRequest();

request.open('GET', 'http://ec2-34-224-66-94.compute-1.amazonaws.com/deploy_campaign?target_amount=10&max_amount=15&equity=0.1&start_ts=1609990432&duration=240&owner=0xA7ACbB81aeD8774D5C4EfC311BB044962C20Ba9c', true)
request.getAllResponseHeaders()
request.onload = function() {
//Parse JSON
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    } else {
    console.log('error')
  }
}
request.send()
}


/*const connectApi = function() {

  var request = new XMLHttpRequest()

  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
  request.onload = function () {;
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      data.forEach((movie) => {
        console.log(movie.title);
      });
      document.getElementById("submit1").innerHTML = "Submitted. Connected to API."
  } else {
    console.log('error')
  }   
}


request.send()
}*/