
$(document).ready(function() {
  console.log("ready");
  $("#listBlock").hide();
  $("#titlePolice, #smallTitle").hide();
  $("#titlePolice").fadeIn(2500);
  $("#smallTitle").fadeIn(8000);


  $("#menu").click(function(){
        $("#listBlock").animate({
            height: 'toggle'
        });
    });
});
