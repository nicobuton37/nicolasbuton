
$(document).ready(function() {
  console.log("ready");
  $("#listBlock, #worksBlock, #contactBlock").hide();
  $("#titlePolice, #smallTitle").hide();
  $("#titlePolice").fadeIn(2500);
  $("#smallTitle").fadeIn(5000);


  $("#menu").click(function(){
        $("#listBlock").animate({
            height: 'toggle',
        });
    });
    $("#talents").click(function(){
      callAjaxTalents();
      $("#listBlock").hide(1000);
    });

    $("#worksBlock").click(function(){
      $("#worksBlock, #listBlock").hide(2000);
    });
    $("#contact").click(function(){
      callAjaxContact();
      $("#listBlock").hide(1000);
    });

    $("#contactBlock").click(function(){
      $("#contactBlock, #listBlock").hide(1000);
    });

    $("#bio").click(function(){
      callAjaxBio();
      $("#listBlock").hide(1000);
    });

    $("#bioBlock").click(function(){
      $("#bioBlock, #listBlock").hide(1000);
    });
});

function callAjaxTalents(){
  $.ajax({
    url: 'talents.html',
    method: 'GET',
  })
  .done(function(data) {
    console.log("success talent");

    $("#worksBlock").html(data).show().animate({
          left: '400px',
          opacity: '0.6',
          height: '400px',
          width: '400px'
    });
  })
  .fail(function() {
    console.log("error talent");
  })
  .always(function() {
    console.log("complete contact");
  });
}

function callAjaxContact(){
  $.ajax({
    url: 'contact.html',
    type: 'GET',
  })
  .done(function(data) {
    console.log("success contact");
    $("#contactBlock").html(data).show().animate({
          left: '750px',
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

function callAjaxBio(){
  $.ajax({
    url: 'bio.html',
    type: 'GET',
  })
  .done(function(data) {
    console.log("success bio");
    $("#bioBlock").html(data).show().animate({
          left: '1100px',
          opacity: '0.6',
          height: '400px',
          width: '400px'
    });
  })
  .fail(function() {
    console.log("error bio");
  })
  .always(function() {
    console.log("complete bio");
  });

}
