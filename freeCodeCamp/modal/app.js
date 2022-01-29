// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


let openBtn = document.querySelector(".modal-btn");

let closeBtn = document.querySelector(".close-btn");

let modalWindow = document.querySelector(".modal-overlay");

openBtn.addEventListener("click",function(){
    toggleModalWindow(modalWindow);
})

closeBtn.addEventListener("click",function(){
    toggleModalWindow(modalWindow);
})

function toggleModalWindow(window){

    window.classList.toggle("open-modal");

}