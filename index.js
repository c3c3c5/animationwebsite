let rect = document.getElementById("dropdown").getBoundingClientRect();
document.querySelector(".dropdownicon2").style.left = `${rect.left}px`;
document.querySelector(".dropdownicon2").style.top = `${rect.top}px`;

window.addEventListener("resize", ()=>{
    rect = document.getElementById("dropdown").getBoundingClientRect();
    console.log(rect.left);
    document.querySelector(".dropdownicon2").style.left = `${rect.left}px`;
    document.querySelector(".dropdownicon2").style.top = `${rect.top}px`;
})

document.querySelector(".dropdownicon").addEventListener("click", ()=>{
    document.querySelector(".dropdownicon2").style.transitionDuration = "0.5s";
    document.querySelector(".dropdownicon2").style.left = `${rect.left - rect.left - 50}px`;
    document.querySelector(".menu").style.left = `0px`;
    document.getElementById("dropdown").style.visibility = "hidden";
    console.log("buttonworks")
})

document.querySelector(".fa-xmark").addEventListener("click", ()=>{
    document.querySelector(".dropdownicon2").style.left = `${rect.left}px`;
    document.querySelector(".menu").style.left = `-334px`;
    setTimeout(()=>{
        document.getElementById("dropdown").style.visibility = "visible";
    }, 500)
})