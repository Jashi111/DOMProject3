// Variable declare 
let loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');

//jQueury for loading function
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

let load = 0;
let inittime = 30;

// Set interval 
let int = setInterval(blurring, inittime);

// Function Call
function blurring(){
    load++
    
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(load);
}