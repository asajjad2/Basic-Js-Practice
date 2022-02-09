
// traversing the dom


    // const btns = document.querySelectorAll(".question-btn");
    // btns.forEach(function(btn){
    //     btn.addEventListener('click',function(e){
    //         const grandp = e.currentTarget.parentElement.parentElement;
    //         // console.log(grandp);
    //         grandp.classList.toggle('show-text');
    //     })
    // })


//using selectors inside the element

    const questions = document.querySelectorAll(".question");
    questions.forEach(function(q){
        btn = q.querySelector('.question-btn');
        btn.addEventListener('click',function(){
            questions.forEach(function(question){
                question.classList.remove('show-text');
            })
            q.classList.toggle('show-text');
            
        })
    })