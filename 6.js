$(function(){
    $(document).keydown(function(tecla){
        if(tecla.keyCode == 37){
            $(".cuadrado").animate({left: "-=30px"}, "fast");
        }
        else if(tecla.keyCode == 38){
            $(".cuadrado").animate({top: "-=30px"}, "fast");
        }
        else if(tecla.keyCode == 39){
            $(".cuadrado").animate({left: "+=30px"}, "fast");
        }
        else if(tecla.keyCode == 40){
            $(".cuadrado").animate({top: "+=30px"}, "fast");
        }
    });
});