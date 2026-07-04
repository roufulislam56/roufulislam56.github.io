// Shopping Cart

let cart = [];
let total = 0;

// Add To Cart

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    document.getElementById("cartCount").innerHTML = cart.length;

    updateCart();
}

// Update Cart

function updateCart(){

    const list = document.getElementById("cartItems");

    list.innerHTML = "";

    cart.forEach(function(item,index){

        list.innerHTML += `
        <li>
            ${item.name}
            <span>
                ৳${item.price}
                <button onclick="removeItem(${index})">❌</button>
            </span>
        </li>
        `;

    });

    document.getElementById("totalPrice").innerHTML = total;

}

// Remove Item

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    document.getElementById("cartCount").innerHTML = cart.length;

    updateCart();

}

// Checkout

function checkout(){

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    alert("✅ Thank you for shopping with Easy Shop!");

    cart=[];

    total=0;

    updateCart();

    document.getElementById("cartCount").innerHTML=0;

}

// Search Product

document.addEventListener("DOMContentLoaded",function(){

const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

document.querySelectorAll(".product").forEach(function(product){

let text=product.innerText.toLowerCase();

product.style.display=text.includes(value)?"block":"none";

});

});

}

});
