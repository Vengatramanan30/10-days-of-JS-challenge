let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

var names = document.getElementById('name').value;



signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

var ans = document.getElementById("answer");
document.getElementById("answer").onclick = here;

function here(_clicked){
	

    ans.innerHTML = "Code Accepted"
}




var answ = document.getElementById("answers");
document.getElementById("answers").onclick = herer;

function herer(_clicked){
    answ.innerHTML = "Code Accepted"
}