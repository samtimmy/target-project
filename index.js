var score=0
$(document).ready(function(){$("[class^=cir]").click(function(evt){
  // console.log(this)
  var num=$(this).attr("data-label")
  // console.log(num)
  score+=parseInt(num*10)
  updategame()

  $(".target").click(function(evt){
    var spot=$("<div class=spot></div>")
    spot.css("left",evt.pageX-$(this).offset().left+"px")
        .css("top",evt.pageY-$(this).offset().top+"px")
    $(this).append(spot)
  })
})})
function updategame(){
  $(".score").text("Score: "+score)
}
function resetgame(){
  score=0
  $(".spot").removeClass()
  $(".target").removeClass("moving")
  updategame()
}

$(window).keydown(function(evt){
  // console.log(evt.key)
  if(evt.key=="r"){
    resetgame()
  }
  if(evt.key=="k"){
    $(".target").toggleClass("moving")
  }
})

$(window).mousemove(function(evt){
  // console.log(evt.pageX,evt.pageY)
  $(".mouseText").text(evt.pageX+","+evt.pageY)
  $(".mouseSymbol").css("left",evt.pageX+"px").css("top",evt.pageY+"px")
})

