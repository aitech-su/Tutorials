const countLabel= document.getElementById("countLabel");

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

decreaseBtn.onclick = function(){
    if (count !== 0){
        count--;
    }
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
