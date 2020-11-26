let products = []
let cartItems = []
let cart_n = document.getElementById('cart_n')

let televisionDiv = document.getElementById('televisionDiv')
let phoneDiv = document.getElementById('phoneDiv')
let laptopDiv = document.getElementById('laptopDiv')

//details
let TELE = [
    { name: 'LG', price: 20 },
    { name: 'Sony', price: 20 },
    { name: 'Sharp', price: 20 },
    { name: 'Samsung', price: 20 },
    { name: 'Hisense', price: 20 },
    { name: 'Nokia', price: 20 }
]

let PHONE = [
    { name: 'Iphone X', price: 300 },
    { name: 'Iphone 12', price: 300 },
    { name: 'Iphone Xpro', price: 300 },
    { name: 'Nokia X', price: 330 },
    { name: 'Samsung S12', price: 400 }
]


let LAPTOP = [
    { name: "toshiba", price: 240 },
    { name: "HP", price: 140 },
    { name: "MacBook", price: 540 },
    { name: "Sony", price: 240 },
    { name: "Del", price: 40 },
]

//items functions
function TeleHTML(itm) {
    let URL = `../images/television/television${itm}.jpeg`
    let btn = `btnTelevision${itm}`

    return `
        <div class = "col">
            <div class ="card">
                <img class="card-img style="height:16rem;" src="${URL}>
                <div class ="card-body">
                    <i style="color:blue;" class="fa fa-television"></i>
                    <i style="color:blue;" class="fa fa-television"></i>
                    <i style="color:blue;" class="fa fa-television"></i>
                    <i style="color:blue;" class="fa fa-television"></i>
                    <i style="color:blue;" class="fa fa-television"></i>
                    <p class="card-text">${TELE[itm-1].name}</p>
                    <p class="card-text">Price: ${TELE[itm-1].price}.00</p>
                    <div class="flexZone style="display:flex;justify-content:space-between;align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${TELE[itm-1].name}', '${TELE[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                            class="btn btn-small"><a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${TELE[itm-1].name}', '${TELE[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                            class="btn btn-small"><a style="color:inherit;" href="/cart">Add to cart</a></button> )
                        </div>
                        <small class="small-text">Free shipping</small>
                    </div>
                </div>
            </div>
        </div
                            `
}


function phoneHtml(itm) {
    let URL = `../images/phone/phone${itm}.jpeg`
    let btn = `btnPhone${itm}`
    return `
        <div class = "col">
        <div class ="card">
            <img class="card-img style="height:16rem;" src="${URL}>
            <div class ="card-body">
                <i style="color:blue;" class="fa fa-phone"></i>
                <i style="color:blue;" class="fa fa-phone"></i>
                <i style="color:blue;" class="fa fa-phone"></i>
                <i style="color:blue;" class="fa fa-phone"></i>
                <i style="color:blue;" class="fa fa-phone"></i>
                <p class="card-text">${PHONE[itm-1].name}</p>
                <p class="card-text">Price: ${PHONE[itm-1].price}.00</p>
                <div class="flexZone style="display:flex;justify-content:space-between;align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${PHONE[itm-1].name}', '${PHONE[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                        class="btn btn-small"><a style="color:inherit;" href="/cart">Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${PHONE[itm-1].name}', '${PHONE[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                        class="btn btn-small"><a style="color:inherit;" href="/cart">Add to cart</a></button> )
                    </div>
                    <small class="small-text">Free shipping</small>
                </div>
            </div>
        </div>
    </div
    
    
    
    
    
    `
}


function LaptopHtml(itm) {
    let URL = `../images/laptop/laptop${itm}.jpeg`
    let btn = `btnPhone${itm}`
    return `
    <div class = "col">
    <div class ="card">
        <img class="card-img style="height:16rem;" src="${URL}>
        <div class ="card-body">
            <i style="color:blue;" class="fa fa-phone"></i>
            <i style="color:blue;" class="fa fa-phone"></i>
            <i style="color:blue;" class="fa fa-phone"></i>
            <i style="color:blue;" class="fa fa-phone"></i>
            <i style="color:blue;" class="fa fa-phone"></i>
            <p class="card-text">${LAPTOP[itm-1].name}</p>
            <p class="card-text">Price: ${LAPTOP[itm-1].price}.00</p>
            <div class="flexZone style="display:flex;justify-content:space-between;align-items-center">
                <div class="btn-group">
                    <button type="button" onclick="cart2('${LAPTOP[itm-1].name}', '${LAPTOP[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                    class="btn btn-small"><a style="color:inherit;" href="/cart">Buy</a></button>
                    <button id="${btn}" type="button" onclick="cart('${LAPTOP[itm-1].name}', '${LAPTOP[itm-1].price}', ${URL}', '${itm}', '${btn}')"
                    class="btn btn-small"><a style="color:inherit;" href="/cart">Add to cart</a></button> )
                </div>
                <small class="small-text">Free shipping</small>
            </div>
        </div>
    </div>
</div
    
    
    `
}

//add to cart
function cart(name, price, url, itm, btncart) {
    let item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item)
    let storage = JSON.parse(localStorage.getItem("cart"))
    if (storage == null) {
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    } else {
        products = JSON.parse(localStorage.getItem("cart"))
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }
    products = JSON.parse(localStorage.getItem("cart"))
    cart_n.innerHTML = `[${products.length}]`
    document.getElementById(btncart).style.display = "none"

}

function cart2(name, price, url, itm, btncart) {
    let item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item)
    let storage = JSON.parse(localStorage.getItem("cart"))
    if (storage == null) {
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    } else {
        products = JSON.parse(localStorage.getItem("cart"))
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }
    products = JSON.parse(localStorage.getItem("cart"))
    cart_n.innerHTML = `[${products.length}]`
    document.getElementById(btncart).style.display = "none"

}

(() => {
    for (let index = 1; index <= 6; index++) {
        televisionDiv.innerHTML += `${TeleHTML(index)}`
    }

    for (let index = 1; index <= 3; index++) {
        phoneDiv.innerHTML += `${phoneHtml(index)}`
        laptopDiv.innerHTML += `${LaptopHtml(index)}`
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"))
        cart_n.innerHTML = `[${products.length}]`
    }

})()