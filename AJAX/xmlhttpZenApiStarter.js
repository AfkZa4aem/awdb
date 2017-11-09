// api.github.com/zen

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  // if state == DONE
  if(XHR.readyState == 4) {
    // and if status 200(ok)
    if(XHR.status == 200) {
      // log - response text
      console.log(XHR.responseText);
    } else {
      // else - log error
      console.log("There was a problem");
    }
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
