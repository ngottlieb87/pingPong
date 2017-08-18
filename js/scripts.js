  function pingPong(number){
    for(var i=0; i<=number; i++){
      if(number % 3 == 0){
        alert("ping");
      } else if(number % 5 === 0){
        alert("pong");
      } else if((number % 3 === 0) && (number % 5 === 0)){
        alert("ping-pong");
      }
    }
  }
$(document).ready(function(){
  $("#pingPong").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#numInput").val());
    var result = pingPong(number);
    $("#output").submit(result);
  })
})
