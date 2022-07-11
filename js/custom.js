// $("#myform").submit(function(e){
//     e.preventDefault();
// });





$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $("#top").fadeIn();
    }
    else{
        $("#top").fadeOut();

    }
});

$("#top").click(function(){
    $("html").animate({scrollTop:0},1000);
});