let shop = document.getElementById("shop");

let shopIteamData = [{
    id: "yhgfyghjk",
    name: "Sony Camera",
    price: 200,
    description: "Capture your Precious moment...",
    img: "img/camera-1.jpg"
},

{id: "juyghtfr",
name: "BiCyle",
price: 100,
description: "Go far!Live long!",
img: "img/cycle-1 (1).jpg"},

{
    id: "hygfftrj",
    name: "Book Shelf",
    price: 150,
    description: "Carry your Favourite",
    img: "img/bookShelf-1.jpg"
},

{
    id: "lophuygtr",
    name: "Dream Catcher",
    price: 20,
    description: "Peace...",
    img: "img/dreamcatcher.jpg"
}];

let busket=[];

let genarateShop = () => {
    return (shop.innerHTML = shopIteamData.map((x) => {
        let {id, name, price, description, img} = x;
        return `
        <div id=id-of-producr-${id} class="item">
            <img width="220" height="220" src="${img}" alt="">
             <div class="details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-quantity">
                   <h2>$ ${price}</h2>
                   <div class="price">
                       <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                       <div id=${id} class="num">0</div>
                       <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div> `;
    }).join(""));
};

genarateShop();


let increment = (id)=>{
let show = id;
let search = busket.find((x)=>x.id===show.id);
if(search===undefined)
{
    busket.push({
        id:show.id,
        item:1
    })
}
else{
    search.item+= 1;
}

console.log(busket);
update(show.id);
};


let decrement = (id)=>{
let show = id;
let search = busket.find((x)=>x.id===show.id);
if(search.item === 0) return ;
else{
    search.item-= 1;
}
console.log(busket);
update(show.id);
};


let update = (id)=>{
    let search = busket.find((x)=>x.id===id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculator();
};

let calculator = ()=>{
    console.log("calculator is running");
}