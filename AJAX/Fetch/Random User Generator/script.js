// https://randomuser.me/api/

var btn = document.querySelector("#btn");
var url = "https://randomuser.me/api/";

btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError)
});

function printError(error){
  console.log(error);
}

function handleErrors(request){
  if(!request.ok){
    throw Error(request.status);
  }
  return request;
}

function parseJSON(request){
  return request.json();
}

function updateProfile(data){
  var img = document.querySelector("#avatar")
  img.src = data.results[0].picture.medium;

  var fullName = document.querySelector("#fullname");
  fullName.innerText = data.results[0].name.first + " " + data.results[0].name.last;

  var username = document.querySelector("#username");
  username.innerText = data.results[0].login.username;

  var email = document.querySelector("#email");
  email.innerText = data.results[0].email;

  var city = document.querySelector("#city");
  city.innerText = data.results[0].location.city;
}
