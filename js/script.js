
$(document).ready(function() {
  console.log("ready");
  $("#listBlock, #worksBlock").hide();
  $("#titlePolice, #smallTitle").hide();
  $("#titlePolice").fadeIn(2500);
  $("#smallTitle").fadeIn(8000);


  $("#menu").click(function(){
        $("#listBlock").animate({
            height: 'toggle',

        });
    });
    $("#talents").click(function(){
      callAjaxTalents()
      $("#listBlock").hide(1000);
    });

    $("#worksBlock").click(function(){
      $("#worksBlock, #listBlock").hide(2000);
    });

});

function callAjaxTalents(){
  $.ajax({
    url: 'talents.html',
    method: 'GET',
  })
  .done(function(data) {
    console.log("success");

    $("#worksBlock").html(data).show().animate({
          left: '250px',
          opacity: '0.6',
          height: '400px',
          width: '400px'
    });
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

}
