

let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");

let circles = document.querySelectorAll(".circle");
let progressLine = document.getElementById("progress");

let count = 1;

nextBtn.addEventListener("click",function(){
    
    count++;
    if(count > circles.length){
        count = circles.length;
    }
    
    updateBar(count);    

})

prevBtn.addEventListener("click",function(){


    count--;
    if(count < 1){
        count = 1;
    }

    updateBar(count);

})

function updateBar(counter){

    circles.forEach( (circle,index) => {

        if(index < counter){
            circle.classList.add("active");
        } else{
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll('.active');

    let widthPercent = ((actives.length -1) / (circles.length-1))*100;
    
    progressLine.style.width = `${widthPercent}%`;

    if(counter==1){
        prevBtn.disabled = true;
    } else if(counter == circles.length){
        nextBtn.disabled = true;
    } else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

}