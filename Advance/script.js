const xhr = new XMLHttpRequest();
let data;

console.log(xhr.readyState);
xhr.open("GET", "https://api.github.com/users/paramveer665");
console.log(xhr.readyState);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(typeof this.responseText);
    data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data);
    document.querySelector("#name").innerHTML = data.name;
    document.querySelector("#login").innerHTML = data.login;
    document.querySelector("#follower").innerHTML = data.followers;
    document.querySelector("#avatar").setAttribute("src", data.avatar_url);
  }
};
xhr.send();
