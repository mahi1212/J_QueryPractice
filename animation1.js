// hide() method use
$("#btn").click(function(){
    $("#div1").hide(1000);
})

// show() method use
$("#btn2").click(function(){
    $("#div2").show();
    // We cam use time here as mili seconds coundown
})

// toggle() method use
$("#btn3").click(function(){
    $("#div3").toggle(1000);
})

// fadeIn()/fadeOut() method
$("#btn4").click(function(){
    $("#div4").fadeIn(1000).fadeOut(2000);
    // fadeIn works when DISPLAY IS NONE
})

// fadeToggle() method use
$("#btn5").click(function(){
    $("#div5").fadeToggle(1000);
})