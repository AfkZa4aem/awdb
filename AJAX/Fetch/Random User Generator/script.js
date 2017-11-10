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

function handleErrors(request){
  if(!request.ok){
    throw Error(request.status);
  }
  return request;
}

function parseJSON(res){
  return res.json().then(function(data){
    return data.results[0];
  });
}

function updateProfile(data){
  var img = document.querySelector("#avatar")
  img.src = data.picture.medium;

  var fullName = document.querySelector("#fullname");
  fullName.innerText = data.name.first + " " + data.name.last;

  var username = document.querySelector("#username");
  username.innerText = data.login.username;

  var email = document.querySelector("#email");
  email.innerText = data.email;

  var city = document.querySelector("#city");
  city.innerText = data.location.city;
}

function printError(error){
  console.log(error);
}
