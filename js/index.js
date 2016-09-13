$(document).ready(function(){

  var parallaxs = document.querySelectorAll(".parallaxs"),
      speed = 0.5;
  var container= document.querySelectorAll('.container'),opac=1/20;
  window.onscroll = function(){
  	if(window.windowYOffset<20)
  	{
  		$('.container').style.opacity()
  	}
    [].slice.call(parallaxs).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

      // var a=$(li).offset().top;
      // console.log(a);

    });
  };

})();
