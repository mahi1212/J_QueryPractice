
$("#button1").click(function(){
    $("h3").text("You have clicked the button");
})

$(".button2").click(function(){
    $("#head2").toggleClass("Tstyle");
})


$(".mybutton").click(function(){
    var buttontext = this.innerHTML;
    $("h1").text( buttontext + " is clicked");
})