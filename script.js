document.addEventListener("DOMContentLoaded", function () {
    console.log("Easy Shop Loaded Successfully!");
});
function showAll(){

document.querySelectorAll(".product").forEach(function(item){

item.style.display="block";

});

}

function showMen(){

document.querySelectorAll(".product").forEach(function(item){

item.style.display="none";

});

document.querySelectorAll(".men").forEach(function(item){

item.style.display="block";

});

}

function showWomen(){

document.querySelectorAll(".product").forEach(function(item){

item.style.display="none";

});

document.querySelectorAll(".women").forEach(function(item){

item.style.display="block";

});

}
const search = document.getElementById("searchInput");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

document.querySelectorAll(".product").forEach(function(product){

let text = product.innerText.toLowerCase();

product.style.display = text.includes(value) ? "block" : "none";

});

});
let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({name,price});

    total += price;

    document.getElementById("cartCount").innerHTML = cart.length;

    updateCart();
}

function updateCart(){

    let list = document.getElementById("cartItems");

    list.innerHTML="";

    cart.forEach(function(item){

        list.innerHTML += `
        <li>
            ${item.name}
            <strong>৳${item.price}</strong>
        </li>`;
    });

    document.getElementById("totalPrice").innerHTML = total;
}

function checkout(){

    if(cart.length==0){

        alert("Your cart is empty");

    }else{

        alert("Thank you for your order!");

    }

}
