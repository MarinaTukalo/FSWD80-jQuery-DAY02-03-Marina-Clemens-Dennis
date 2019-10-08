    // dave has this line
    // var data = Jason(products);

    for (i = 0; i < 7; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Unique ID</b></td><td width=50>" + products[i].UniqueID+ "</td></tr>");
        document.writeln("<tr><td><b>Product Name</b></td><td width=50>" + products[i].productName+ "</td></tr>");
        document.writeln("<tr><td><b>Price</b></td><td width=50>" + products[i].price+ "</td></tr>");
        var price = products[i].price;
        console.log(price);
        document.writeln("<tr><td><b>Description</b></td><td width=50>" + products[i].description+"</td></tr>");
        document.writeln("<tr><td><b>Last Name</b></td><td width=50><img width='200' src="+products[i].img+"></td></tr>");
        // document.writeln("<tr><td><b>do buy</b></td><td width=50><button type='button' class='buypr"+i+"' onclick='addToCart"+i+"()''>buy me"+i+"</button></td></tr>");
        document.writeln("<tr><td><b>do buy</b></td><td width=50><button type='button' class='buypr"+i+"''>buy me"+i+"</button></td></tr>");

        document.writeln("</table>");
        document.writeln("</td>");
        document.writeln("<p class='price'>0</p>");
    }


$(".buypr0").click(function(){
// alert("katze");
// $(".price").text("5");
var currentValue = parseInt($(".price").text());
console.log(currentValue);
var newValue = parseInt(currentValue) + 5;
console.log(newValue);
$(".price").text(newValue);
});

$(".buypr1").click(function(){
// alert("katze");
// $(".price").text("5");
var currentValue = parseInt($(".price").text());
console.log(currentValue);
var newValue = parseInt(currentValue) + 1;
console.log(newValue);
$(".price").text(newValue);
});
