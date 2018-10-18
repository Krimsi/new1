
$("q1").css("fontSize","33px");
$("q2").css("fontSize","28px");
console.log('sdfgsdg');

$("q1").add("h1").css("background-color","#db7093");
$("#knopka2").click(function(){
      $("#numb").text(function(i,numb){
         return parseInt(numb)+1;
      });

}); 


$(document).ready(function(){
  
   $("#knopka1").click(function(){
      $("div").removeAttr("id");
      $("#knopka1").css("display","none");
   });

});


$(document).ready(function(){
  
   $("#but1").click(function(){
      $("#but1").remove()
      $("h1").remove();
   });
   $("#but2").click(function(){
      $("#but2").remove();
      $("p").remove();
   });
   $("#but3").click(function(){
      $("#but3").remove()
      $("p").remove();
   });

}); 


$(document).ready(function(){
  
   $("#knopka3").click(function(){
      $("h149").replaceWith("<h149>Ваня</h149>");
      $("#knopka3").css("display","none");
   });

});     
 $(document).ready(function(){
      $('.bxslider').bxSlider();
    });




  
  $('.bxSlider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 750,
  
});




function Hello(){

  alert('Дороу')
}




