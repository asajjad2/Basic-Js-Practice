// get clicked button's text content - operator or operand 
// while numbers are entered keep getting them and displaying them on screen 
// when operand entered stop getting operator and get a second var for other operand


let op1 = 0,
op2 = 0,
operator = "",
input = "",
output = "",
mainExpression = "",
op1counter = 0;

let operandEncountered = false;

btns = document.querySelectorAll('button');
output = document.querySelector(".output");

btns.forEach(function(btn){

    btn.addEventListener('click',function(e){
        input = e.currentTarget.textContent;
        manageInput(input);
    })

})

//if input is a number for the first time


function manageInput(inp){

    let isNum = false;

    if(isNaN(Number(inp)) == false){
        console.log(Number(inp));
        isNum = true;
    }
        

    

    if(isNum){

        if(operandEncountered){//not 1st
            
            if(!isNaN(mainExpression[mainExpression.length-1]) || mainExpression[mainExpression.length-1] === ")"){
                
            }
            
        } else {//1st number

            inp = Number(inp);
            appendNumber(inp);
            updateDisplay();

        }

    } else{ //operator

        if(inp !== "="){ //other than =


            if(!isNaN(mainExpression[mainExpression.length-1]) || mainExpression[mainExpression.length-1] === ")"){//last char is num

                inp = conversions(inp);
                operator = inp;
                mainExpression += op1.toString() + operator;
               

            } else{

                inp = conversions(inp);
                operator = inp;
                mainExpression += op1.toString() + operator;
                output.innerHTML = mainExpression;
                op1 = 0;

            }
            
            
            
          

        } else{

            if(!isNaN(mainExpression[mainExpression.length-1]) || mainExpression[mainExpression.length-1] === ")"){

                output.innerHTML = mainExpression;

            } else{

                mainExpression += op1;
                output.innerHTML = mainExpression;
                console.log(eval(mainExpression));
                
            }

            

        }

    }

   

}

function conversions(inp){

    if(inp === "x")
        inp = "*";
    else if(inp === "^")
        inp = "**";
    else if(inp === "x²")
        inp = "**2";   
    else if(inp === "√") 
        inp = "**(1/2)";
    else if(inp === "DEL"){
        mainExpression = mainExpression.slice(0,-1);
        inp = "";
        op1 = "";
    } else if(inp == "C" || inp == "CE"){
        mainExpression = "";
        inp = "";
        op1 = "";
    }
        

    return inp;

}

function clear(){
    mainExpression = "";
}

function deleteFun(){   
    mainExpression = mainExpression.slice(0,-1);
}

function appendNumber(num){

    op1 *= 10;
    op1 += num;

    for(let i=0;i<op1counter;i++){
        deleteFun();
    }

    op1counter++;

    mainExpression += op1;

}

function compute(){
    return eval(mainExpression);
}

function updateDisplay(){
    output.innerHTML = mainExpression;
}