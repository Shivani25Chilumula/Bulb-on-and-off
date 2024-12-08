//condition 1: if click on button ask to color and display on bulb
function on() {
    const bulb = document.getElementById("bulb");
    const color = prompt("Enter bg color"); 
    if (color) {
      bulb.style.backgroundColor = color; 
    }
}
//condition 2: if click off button display the bulb color white
function off() {
    const bulb = document.getElementById("bulb");
    bulb.style.backgroundColor = "white";
}
