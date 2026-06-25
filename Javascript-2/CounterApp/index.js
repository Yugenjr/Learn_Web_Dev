//counter-app

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("countLabel");
let countValue = 0;
increase.onclick = function(){
    countValue++;
    count.textContent = countValue;
}
decrease.onclick = function(){
    countValue--;
    countLabel.textContent = countValue;
}
reset.onclick = function(){
    countValue = 0;
    count.textContent = countValue;
}