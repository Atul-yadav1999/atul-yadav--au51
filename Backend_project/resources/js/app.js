let addToCart = document.querySelectorAll('add-to-cart')

function updateCart(pizza){
    
}



addToCart.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    console.log(e)
    let pizza = btn.dataset.pizza
})
})
