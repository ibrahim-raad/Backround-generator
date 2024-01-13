var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

css.textContent =  "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0)) ;";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// function btn(){
// btn.style.background = body.style.background = 
// "linear-gradient(to right, " 
// + color1.value 
// + ", " 
// + color2.value 
// + ")";
// }

// btn.addEventListener("click", btn);