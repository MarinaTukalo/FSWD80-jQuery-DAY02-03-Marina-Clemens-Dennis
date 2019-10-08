// Start of JQuery Code
$("document").ready(function() {

  //CREATE BUTTONS
  for (let i = 0; i < items.length; i++) {
    $("#btns").append(`<input type="button" value="${items[i].name}">`); //${items[i].name}: it means we will take value from every items name -> every name gets own button
  }
  $("input[type=button]").addClass("buttons");
  $("#btns").append(` <input type="button" value="RESET" id="reset">`); // reset button
  $("#btns").append(`<br>`);
  $(".buttons").css({"background-color":"yellow", "padding":"10px", "margin":"5px"});

  //add eventlisteners for buttons
  var buttons = document.getElementsByClassName('buttons');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', addToCart);
  }
  document.getElementById('reset').addEventListener('click', reset);

  //"this" gets passed as argument by eventListener
  function addToCart() {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name == this.value) {
        items[i].quantity++;
      }
    }
    update();
  }

  //empty the cart
  function reset() {
    for (let i = 0; i < items.length; i++) {
      items[i].quantity = 0;
    }
    update();
  }

  //UPDATE THE HTML AND SUM
  function update() {
    var sum = 0;
    $("#cart").html("<h2>Shopping Cart</h2>");
    for (let i = 0; i < items.length; i++) {
      if (items[i].quantity > 0) { //if item is in cart...
        $("#cart").append(`<div class="item">Name: ${items[i].name} | Price: ${items[i].price}€ <img src=${items[i].image}><br>
          Quantity: ${items[i].quantity}<hr></div>`);
        sum+= items[i].price*items[i].quantity;
      }
    }
    $("#cart").append(`<hr>${Math.round(sum*100)/100} €`);
  }

});
// End of JQuery Code