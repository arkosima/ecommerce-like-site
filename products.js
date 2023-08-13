//Eltároljuk az api linket egy változóban
const api_products_url = 'https://fakestoreapi.com/products'

async function fetchData()
{
    //létrehozunk egy response változót mellyel bekérjük az adatokat fetch segítségével
    const response = await fetch(api_products_url).then((data)=>{
        return data.json();
    }).then((dataFinish)=>{
        //Létrehozunk egy változót amit a html megjelenítéshez fogunk használni
            let product_scheme =""
            dataFinish.map((values)=>
            {
                //Összepárosítjuk az adatokat html résszel, hogy azok a böngészőben megjelenjenek
                product_scheme+=`<div class="product-card">
                <h1 class="title">${values.title}</h1>
                <p class="category">${values.category}</p>
                <img src="${values.image}" alt="product-img">
                <p>${values.description}</p>              
                <p class="price">$${values.price}</p>
                <button class="add-to-cart">Add to cart</button>
            </div>`
            })
            //kiválasztjuk a place-holder divet, és beleágyazzuk a product_scheme változó alapján az összes terméket
            document.getElementById("product-holder").innerHTML=product_scheme;
            //ha hibára futna a fetch, akkor a hibát kiíratjuk a consoleba
        }).catch((err)=>
    {
        console.log(err);
    })
}
//meghívjuk a fetchData függvényt.(meglehetne oldani függvény nélkül is, simán fetchel, akkor nem kellene meghívni a függvényt.)
fetchData();