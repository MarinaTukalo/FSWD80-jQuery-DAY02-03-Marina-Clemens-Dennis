    // dave has this line
    // var data = Jason(products);

    for (i = 0; i < 6; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Unique ID</b></td><td width=50>" + products[i].UniqueID+ "</td></tr>");
        document.writeln("<tr><td><b>Product Name</b></td><td width=50>" + products[i].productName+ "</td></tr>");
        document.writeln("<tr><td><b>Price</b></td><td width=50>" + products[i].price+ "</td></tr>");
        document.writeln("<tr><td><b>Description</b></td><td width=50>" + products[i].description+"</td></tr>");
        document.writeln("<tr><td><b>Last Name</b></td><td width=50><img width='200' src="+products[i].img+"></td></tr>");
        document.writeln("<tr><td><b>do buy</b></td><td width=50><button type='button' class='buypr"+i+"' onclick='addToCart"+i+"()''>buy me"+i+"</button></td></tr>");
        
        document.writeln("</table>");
        document.writeln("</td>");
    }