let button = document.querySelector('.submit');
let inputVal = document.querySelector('.inputVal');
let cname = document.querySelector('.name');
let cdesc = document.querySelector('.desc');
let ctemp = document.querySelector('.temp');
let main = document.querySelector('main');

bgImgs = ["sun","mist","clouds","snow","rain","smoke"]


button.addEventListener('click',function(){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=820879caa52e76678596956abc5871de&units=metric`)
    .then(response => response.json())
    .then(data => {
        let name = data['name'];
        name[0].toUpperCase(); 
        let desc = data['weather'][0]['main'];
        desc[0].toUpperCase();
        cname.innerHTML = name;
        cdesc.innerHTML = desc;
        ctemp.innerHTML = data['main']['temp'] + "&#176C";

        let randomVal = randomNumGenerator(2);
        // console.log(randomVal);

        if(desc == 'Clear'){
            main.style.backgroundImage = `url(assets/${bgImgs[0]}${randomVal}.jpg)`;
        } else if(desc == 'Mist'){
            main.style.backgroundImage = `url(assets/${bgImgs[1]}${randomVal}.jpg)`;
        } else if(desc == 'Clouds'){
            main.style.backgroundImage = `url(assets/${bgImgs[2]}${randomVal}.jpg)`;
        } else if(desc == 'Snow'){
            main.style.backgroundImage = `url(assets/${bgImgs[3]}${randomVal}.jpg)`;
        } else if(desc == 'Rain'|| desc == 'Haze'){
            main.style.backgroundImage = `url(assets/${bgImgs[4]}${randomVal}.jpg)`;
        } else if(desc == 'Smoke' || desc == 'Smog' ){
            main.style.backgroundImage = `url(assets/${bgImgs[5]}${randomVal}.jpg)`;
        } 

    })

    .catch(err => alert("Incorrect city-name"));

})



inputVal.addEventListener("keyup",function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
})

function randomNumGenerator(size){
    return Math.floor(Math.random()*size);
}