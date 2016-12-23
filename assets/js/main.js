$(document).ready(function() {
    $('#menu-icon').click(function(){
        if($('nav.menu').hasClass("toggle")){
            $('nav.menu').removeClass("toggle");
            $('#menu-icon').removeClass("toggle");
        }else{
            $('nav.menu').addClass("toggle")
            $('#menu-icon').addClass("toggle")
        }
        
    });
    
    
    
    
});