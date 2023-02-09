const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit")
const card = document.querySelector(".card")
const thank = document.querySelector(".thank")
const warning = document.querySelector(".warning");
const selec = document.querySelector(".thank p");


/*
document.getElementById('button').onclick = function() {
   alert("button was clicked");
}​;​


*/
let selectedRating;

let clicked = false;

function selectRating(e){
  if (selectedRating!==undefined) {
    btn[selectedRating-1].classList.remove("active")
  }
  
  else{ 
    warning.classList.add("disabled")
    
  }
  e.target.classList.add("active");
  selectedRating = Number(e.target.innerText);
  selec.innerHTML = `You selected ${selectedRating} out of ${btn.length}`
  
}

btn.forEach(function (element) {
  element.addEventListener("click",
  selectRating);


  
});








submit.addEventListener(("click"),(e)=>{
  if (selectedRating==undefined) {
    warning.classList.remove("disabled")
  
  }
  
  
  else{
    
    card.classList.add("hidden")
    thank.classList.remove("hidden")
  }

  
  

})

function remove(e){
  if (selectedRating!=undefined) {
    warning.classList.add("disabled")
  }
}

