$(function() {
    $(".carousel").carousel( { interval: 2500, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

function myMap() {
    var mapOptions1= {
      center:new google.maps.LatLng(38.20377,-85.68376),
      zoom:15,
    };
    
    var mapOptions2= {
        center:new google.maps.LatLng(38.17737,-85.71132),
        zoom:15,
      };

    var map1 = new google.maps.Map(document.getElementById("googlemap1"),mapOptions1);
    var map2 = new google.maps.Map(document.getElementById("googlemap2"),mapOptions2);
}
