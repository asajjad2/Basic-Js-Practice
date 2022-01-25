const colors = ["green", "red", "white", "blue", "black", "yellow", "IndianRed" , "HotPink", "OrangeRed" , "Khaki", "Teal"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click',function(){
    //get random number b/w 0 and colors.length-1, set background colour of page as colours[randomNum] and change text in ///span

    let randomNum = randomNumGenerator(colors.length);
    // console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];

})

function randomNumGenerator(size){
    return Math.floor(Math.random()*size);
}