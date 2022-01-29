let panels = document.querySelectorAll('.panel');

panels.forEach(function(panel){
    panel.addEventListener('click',() => {
        removeActiveAll(panels);
        panel.classList.add('active');
    })
})

function removeActiveAll(panels){

    panels.forEach(panel => {
        panel.classList.remove('active');
    })

}