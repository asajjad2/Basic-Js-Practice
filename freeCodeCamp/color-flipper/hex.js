const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');


button.addEventListener('click',function(){

    let hexVal = getHexVal();
    // console.log(hexVal);
    document.body.style.backgroundColor = hexVal;
    color.textContent = hexVal;

})

function getHexVal(){

    let hexV = "#";
    for(let i=0;i<6;i++){
        hexV += hex[randomNumGenerator(hex.length)];
    }

    return hexV;

}

function randomNumGenerator(size){
    return Math.floor(Math.random()*size);
}

