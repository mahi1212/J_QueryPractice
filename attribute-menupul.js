$("#link1").attr("href", "https://www.youtube.com/watch?v=eosp4QAbu-U&list=PLgH5QX0i9K3pSJG9Hwjnykd0hLGEsW4DB&in%20%20%20dex=4");

// here we added text by prepend() method
var text = $("<p></p>").html("Here we will replace href atribute<br>");
$("#link1").prepend(text);

$("#link2").removeAttr("href");


