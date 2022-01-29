// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector(".nav-toggle");
const ul = document.querySelector(".links");

toggleBtn.addEventListener('click',function(){
    
    // if(ul.classList.contains("show-links"))
    //     ul.classList.remove("show-links");
    // else
    //     ul.classList.add("show-links");

    ul.classList.toggle("show-links");

})