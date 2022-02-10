let container = document.querySelector(".container");
let buttons = document.querySelectorAll("button");

console.log(buttons);

buttons.forEach(function(btn){

    btn.addEventListener("click",function(e){
        if(btn.id == "open"){
            container.classList.add("show-nav");
            container.classList.add("rotated");
        } else if(btn.id == "close"){
            container.classList.remove("show-nav");
            container.classList.remove("rotated");
        }
    })

})