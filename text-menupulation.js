$("#p1").html("<b>Good bye</b>");
$("h1").append("<br><strike>append </strike>of h1 tag | it add new content in ansestor content");
$("h1").prepend("<strike>Prepend</strike> add before the content<br>");
var add1 = $("<p></p>").html("This is use of <b>After </b>|| New content creating and manupulating</b>");
$("#p1").after(add1);