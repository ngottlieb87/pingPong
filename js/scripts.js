  function pingPong(number){

    indvNum=[];
    numPingPong=[];

    for(i = number; i > 0; i--){
      indvNum.push(i);
    }

    var indvNum= indvNum.reverse();

    for(var i=0; i<=indvNum[i]; i++){
      if(indvNum[i] % 15 === 0){
        numPingPong.push("Ping-Pong");
      } else if(indvNum[i] % 5 === 0){
        numPingPong.push("Pong");
      }else if(indvNum[i] % 3 === 0){
        numPingPong.push("Ping");
      } else{
        numPingPong.push(indvNum[i]);
      }
    }
    return numPingPong.forEach(function(i){
      $("#output ul").append("<li>" + i + "</li>");
      $("#output").show(2000);
    });;
  }

  $(document).ready(function(){
    $("#pingPong").submit(function(event){
      event.preventDefault();
      var number = parseInt($("#numInput").val());
      var result = pingPong(number);

      $("button#clear").click(function(){
        $("#output li").remove();
        $("#output h2").remove();
      });
    });
  });
