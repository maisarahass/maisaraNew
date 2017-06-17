$(document).ready(function(){
    
    $('.carousel').carousel({
  interval: 2000
});
    
    $(function() {
     
    $( "#datepicker" ).datepicker();
});
     $(function() {
         $( "#calendar" ).datepicker();  
      
    }); 
    
    
    
    // زر السكرول لبطلعك لفوق
    
    var scrollButton = $(".back_top");
    
    $(window).scroll(function(){
       if ($(this).scrollTop() >= 700 )
           {
               scrollButton.show();
           }
        else
            {
                scrollButton.hide();
            }
        
    });
      
     // عند الضغط على الزر
         scrollButton.click(function(){
             
             $("html,body").animate({scrollTop : 0}, 800);
         });
    




});
