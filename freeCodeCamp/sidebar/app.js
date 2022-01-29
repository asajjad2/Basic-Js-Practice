

const openBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

openBtn.addEventListener("click",function(){
    toggleBar(sidebar);
})

closeBtn.addEventListener("click",function(){
    toggleBar(sidebar);
})

function toggleBar(side){
    side.classList.toggle("show-sidebar");
}