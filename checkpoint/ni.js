const cart = document.querySelector('#cart');
var add = document.querySelectorAll('.add');
var entries = document.querySelector('.entries');

var totalPrice = 0;


function addToCart(event){
  var element = event.target.parentNode;
  
  var imgSource = element.querySelector('.item-image').src;
  var price = element.querySelector('.price').innerHTML;
  var priceNum = parseInt(price.slice(1));
  
  var cartItem = document.createElement('li');
  cartItem.setAttribute('class', 'cart-item');
  
  var itemImg = document.createElement('img');
  itemImg.setAttribute('src', imgSource);
  itemImg.setAttribute('class', 'item-img');
  
  var itemName = document.createElement('span');
  itemName.setAttribute('class' , 'item-name');
  itemName.innerHTML = element.querySelector('.item-title').innerHTML;
  
  var itemPrice = document.createElement('span');
  itemPrice.setAttribute('class' , 'price');
  itemPrice.innerHTML = `$${priceNum}`;
  
  var quantity= document.createElement('span');
  quantity.setAttribute('class' , 'quantity');
  
  var plus = document.createElement('button');
  plus.setAttribute('class', 'plus');
  plus.innerHTML = "+";
  plus.addEventListener('click' , addQty);
  
  var qty = document.createElement('span');
  qty.setAttribute('class', 'qty');
  qty.innerHTML = 1;
  
  var minus = document.createElement('button');
  minus.setAttribute('class', 'minus');
  minus.innerHTML= "-";
  minus.addEventListener('click' , minusQty);
  
  quantity.appendChild(minus);
  quantity.appendChild(qty);
  quantity.appendChild(plus);
  
  entries.appendChild(cartItem);
  cartItem.appendChild(itemImg);
  cartItem.appendChild(itemName);
  cartItem.appendChild(itemPrice);
  cartItem.appendChild(quantity);
  
  updateTotal(priceNum);
}


function addQty(event){
  var element = event.target.parentNode.parentNode;
  var qty = element.querySelector('.qty');
  qty.innerHTML = parseInt(qty.innerHTML) + 1;
  
  var itemPrice = element.querySelector('.price').innerHTML;
  
  updateTotal(parseInt(itemPrice.slice(1)));
}

function minusQty(event){
    var element = event.target.parentNode.parentNode;
  var qty = element.querySelector('.qty');
  
  if(qty.innerHTML < 2){
    element.remove();
  }
  
  qty.innerHTML = parseInt(qty.innerHTML) - 1;
  
  var itemPrice = element.querySelector('.price').innerHTML;
  
  updateTotal(-parseInt(itemPrice.slice(1)));
}

add.forEach(function(button) {
  button.addEventListener('click', addToCart);
});


function updateTotal(price){
  totalPrice += price;
  var totalPriceElem = document.querySelector('#total-price');
  totalPriceElem.innerHTML = `$${totalPrice}`;
}