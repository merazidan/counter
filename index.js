 
 

 

let b_Decrease = document.getElementById("b-decrease");
let b_Reset = document.getElementById("b-reset");
let b_Increase = document.getElementById("b-increase");
let numCounter = document.getElementById("num-counter");
 


b_Decrease.addEventListener("click", function () {
   
  --numCounter.textContent
    numCounter.style.color = numCounter.textContent == 0 ? 'black' : (numCounter.textContent < 0 ? "red" : "green")
   
});

b_Increase.addEventListener("click", function () {
   ++numCounter.textContent
   numCounter.style.color = numCounter.textContent == 0 ? 'black' : (numCounter.textContent > 0 ? "green" : "red")
});



b_Reset.addEventListener("click", function () {
    numCounter.textContent = 0
    numCounter.style.color = 'black'
});

