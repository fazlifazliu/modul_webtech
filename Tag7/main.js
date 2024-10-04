console.log(
    document.getElementById("element")

);


let n = 0;
console.log(n); 

let b = 0;

let v = 0;

n=n+1;
console.log(n); 

function buttonPressed() {
    n=n+1;
    b=b+5;
    v=v+9;
    document.getElementById("element").style.left = n + "px";
    document.getElementById("element1").style.left = b + "px";
    document.getElementById("element2").style.left = v + "px";


}



function neuesElement() {
    let div = document.createElement("div");
    div.classList.add("random");
    document.body.appendChild(div);
}


function starteAnimation() {
    let element = document.getElementById('kreis2');
    element.style.animationPlayState = "running";
 
}

window.addEventListener("scroll", starteAnimation);
