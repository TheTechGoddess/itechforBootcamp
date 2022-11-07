var head = document.getElementById("header");
var button = document.getElementById("button");

button.addEventListener("click",function(){
  head.style.color = "purple";
})

var h2 = document.getElementById("h2");
h2.innerHTML = "Hello there!!!"

button.innerHTML = "I have not been clicked";

button.classList = "btn";

