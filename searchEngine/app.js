const btn = document.getElementById("search-button");
const input = document.getElementById("search-field");
const result = document.getElementById("search-results");
const template = result.querySelector("li").cloneNode(true);
// console.log(template,btn);

data = [
    {
        name: "Historic Place",
        details: "totam similique eaque saepe perspiciatis expedita dignissimos quidem dolorum ex. Vitae nihil ducimus sunt nulla quasi aperiam sequi numquam repudiandae exercitationem dolorum!",
        img: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "Railway Track",
        details: "Obcaecati sint ullam nostrum excepturi cum culpa eveniet, quas optio provident quod, earum voluptatem, sunt quidem rerum. Quo blanditiis asperiores assumenda laborum voluptates",
        img: "https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "Sea-side rocks",
        details: "Dolor molestiae placeat odit blanditiis amet ea repudiandae corporis veritatis. Perspiciatis exercitationem doloremque unde expedita, amet nesciunt vitae odit minus",
        img: "https://images.unsplash.com/photo-1598714673521-98d539a175f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "Temple",
        details: "sint iusto iste accusamus excepturi maxime necessitatibus quo quas repellendus earum?",
        img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "City Skyline",
        details: "repudiandae quis, debitis totam sit facere placeat doloribus blanditiis cumque. Numquam quibusdam exercitationem odit quasi error eligendi",
        img: "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "Phone Booth",
        details: "incidunt non sapiente magni provident molestiae laboriosam, fugiat eveniet similique tempora. Velit aliquid, deserunt error recusandae commodi deleniti soluta",
        img: "https://images.unsplash.com/photo-1595840012995-d9d6216d547e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        element : ""
    },
    {
        name: "Indian Architecture",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus modi sunt et, id neque cum. Quisquam",
        img: "https://images.unsplash.com/photo-1624185462112-3677a68b2500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        element : ""
    },
    {
        name: "Japenese street",
        details: "ducimus perspiciatis et quidem sint reprehenderit temporibus hic praesentium explicabo itaque at sequi voluptatum in, a corporis ",
        img: "https://images.unsplash.com/photo-1490761668535-35497054764d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        element : ""
    }
]
// console.log(JSON.stringify(data));
// https://api.jsonserve.com/qSy-xe
data.forEach(function(item,index){

    let header = template.querySelector("h1");
    let image = template.querySelector("img");
    let para = template.querySelector("p");
    // console.log(header,image,para);

    header.textContent = item.name;
    image.src = item.img;
    para.textContent = item.details;
    // console.log(header.textContent,image.src,para.textContent);

    let copy = template.cloneNode(true);

    result.appendChild(copy);
    item.element = copy;
    // console.log(item.element);
})

data.forEach(function(item){
    item.element.classList.add("hide");
})




btn.addEventListener("click",function(){
    
    generateResults(input.value);

    
})

//hide each and every card present - then look for cards which have searchValue in name and append them


function generateResults(searchValue){

    // console.log(searchValue);

    searchValue = searchValue.toLowerCase();

    hideResults();

    data.forEach(function(item){
        item.element.classList.add("hide");
    })

    data.forEach(function(item){

        // console.log(item.element.classList);
        
        let lowerName = item.name;

        lowerName = lowerName.toLowerCase();

        if(lowerName.includes(searchValue)){
            
            item.element.classList.remove("hide");

        }

    })

}

function hideResults(){
    
    

}

input.addEventListener("keyup",function(event){
    
        event.preventDefault();
        btn.click();
    
})

//code refactor, proper function and flow etc

//results showing as person types