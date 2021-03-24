var toggle = document.querySelector(".toggle");
const navigator = document.querySelector(".navigation");
toggle.addEventListener("click", function(){
    this.classList.toggle("active");
    navigator.classList.toggle("active");
});