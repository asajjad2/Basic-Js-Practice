let button = document.querySelector('.submit');
let inputVal = document.querySelector('.inputVal');
let cname = document.querySelector('.name');
let cdesc = document.querySelector('.desc');
let ctemp = document.querySelector('.temp');
let main = document.querySelector('main');

bgImgs = ["sun","mist","clouds","snow","rain"]


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

        if(desc == 'Clear'){
            main.style.backgroundImage = `url(${bgImgs[0]}.jpg)`;
        } else if(desc == 'Mist'){
            main.style.backgroundImage = `url(${bgImgs[1]}.jpg)`;
        } else if(desc == 'Clouds'){
            main.style.backgroundImage = `url(${bgImgs[2]}.jpg)`;
        } else if(desc == 'Snow'){
            main.style.backgroundImage = `url(${bgImgs[3]}.jpg)`;
        } else if(desc == 'Rain'){
            main.style.backgroundImage = `url(${bgImgs[4]}.jpg)`;
        } 

    })

    .catch(err => alert("Incorrect city-name"));

})




