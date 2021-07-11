$("#btn1").click(function(){
    $("#div1").fadeTo(1000,0.5);
})

$("#btn2").click(function(){
    $("#div2").slideUp(500).slideDown();
})

$("#btn3").click(function(){
    $("#div3").slideToggle();
})

// IMPORTANT 
// Animate() method

$("#btn4").click(function(){
    $("#div4").animate({height:"400px"})
})


$("#btn5").click(function(){
    $("#div5").animate({
        height:"200px",
        width:"600px",
        marginLeft:"75px",
    })
})
