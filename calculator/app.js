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
let StackArr = [1,2,3]; // would contain the two operands and operator

btns = document.querySelectorAll('button');
output = document.querySelector("#eq");
result = document.querySelector("#ans");

btns.forEach(function(btn){

    btn.addEventListener('click',function(e){
        input = e.currentTarget.textContent;
        manageInput(input);
    })

})

//if input is a number for the first time


function manageInput(inp){

    result.innerHTML = "";

    let isNum = false;

    if(isNaN(Number(inp)) == false){
        console.log(Number(inp));
        isNum = true;
    }
        

    

    if(isNum){      

            inp = Number(inp);
            appendNumber(inp);
            updateDisplay();

    } else{ //operator

        if(inp !== "="){ //other than =

                

                op1 = 0;
                op1counter = 0;
                appendOperator(inp);
                updateDisplay();
            
        } else{

            mainExpression = compute();
            if(typeof(mainExpression) == "undefined")
                output.innerHTML = "Syntax Error";
            else{
                result.innerHTML = mainExpression;
            }

            
            op1 = 0;
            op1counter = 0;

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
        deleteFun();
        inp = "";
    } else if(inp == "C" || inp == "CE"){
        clear();
        inp = "";
    }
        

    return inp;

}

function clear(){
    mainExpression = "";
}

function deleteFun(){   
    // console.log("avds");
    mainExpression = mainExpression.slice(0,-1);
}

function appendOperator(op){
    op = conversions(op);
    mainExpression += op;
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
    console.log(eval(mainExpression));
    return eval(mainExpression);
}

function updateDisplay(){
    output.innerHTML = mainExpression;
}