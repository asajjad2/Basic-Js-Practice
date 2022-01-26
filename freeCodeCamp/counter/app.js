let value = document.querySelector('#value');

// const decBtn = document.querySelector(".decrease");
// const incBtn = document.querySelector(".increase");
// const resetBtn = document.querySelector(".reset");

// decBtn.addEventListener('click',function(){

//     let numVal = +(value.textContent);
//     numVal--;
//     value.textContent = numVal;
//     if(numVal<0)
//         value.style.color = 'red';
//     else if(numVal > 0)
//         value.style.color = 'green';
//     else 
//         value.style.color = 'var(--clr-black)';
// })

// incBtn.addEventListener('click',function(){

//     let numVal = +(value.textContent);
//     numVal++;
//     value.textContent = numVal;
//     if(numVal<0)
//         value.style.color = 'red';
//     else if(numVal > 0)
//         value.style.color = 'green';
//     else 
//         value.style.color = 'var(--clr-black)';
// })

// resetBtn.addEventListener('click',function(){
//     value.textContent = 0;
//     value.style.color = 'var(--clr-black)';
// })

let btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function(btn){

    btn.addEventListener('click',function(e){
        let classes = (e.currentTarget.classList);

        if(classes.contains('decrease')){
            count--;
        } else if(classes.contains('increase')){
            count++;
        } else if(classes.contains('reset')){
            count = 0;
        }

        value.textContent = count;

        if(count<0)
            value.style.color = 'red';
        else if(count > 0)
            value.style.color = 'green';
        else 
            value.style.color = 'var(--clr-black)';

    })
})