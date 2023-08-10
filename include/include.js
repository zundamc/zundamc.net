//includeHeader
const headerRequest = new XMLHttpRequest();
headerRequest.open("GET", "/include/header.html", true);
headerRequest.onreadystatechange = function () {
  if (headerRequest.readyState === 4 && headerRequest.status === 200) {
    const response = headerRequest.responseText;
    const element = document.querySelector("header");
    element.innerHTML = response;
  }
};
headerRequest.send();

//includeFooter
const footerRequest = new XMLHttpRequest();
footerRequest.open("GET", "/include/footer.html", true);
footerRequest.onreadystatechange = function () {
  if (footerRequest.readyState === 4 && footerRequest.status === 200) {
    const response = footerRequest.responseText;
    const element = document.querySelector("footer");
    element.innerHTML = response;
  }
};
footerRequest.send();