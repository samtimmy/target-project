var score=0
$(document).ready(function() {
    $("[class^=cir]").click(function(evt){
        console.log('click')
      var num=$(this).attr("data-label")
      score+=parseInt(num*10)
      updategame()
    })
})
function updategame(){
  $(".score").text("Score: "+score)
}
function resetgame(){
  score=0
  updategame()
}

$(window).keydown(function(evt){
  if(evt.key=="r"){
    resetgame()
  }
  if(evt.key=="k"){
    $(".target").toggleClass("moving")
  }
})

$(window).mousemove(function(evt){
  $(".mouseText").text(evt.pageX+","+evt.pageY)
  $(".mouseSymbol").css("left",evt.pageX+"px").css("top",evt.pageY+"px")
})