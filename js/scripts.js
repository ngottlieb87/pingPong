  function pingPong(number){

    indvNum=[];
    numPingPong=[];

    for(i = number; i > 0; i--){
      indvNum.push(i);
    }

     var indvNum= indvNum.reverse();

    for(var i=0; i<=indvNum[i]; i++){
      if(indvNum[i] % 3 === 0 && indvNum[i] % 5 !== 0){
        numPingPong.push("ping");
      } else if(indvNum[i] % 5 === 0 && indvNum[i] % 3 !== 0){
        numPingPong.push("pong");
      }else if(indvNum[i] % 3 === 0 && indvNum[i] % 5 === 0){
        numPingPong.push("ping-pong");
      } else{
        numPingPong.push(indvNum[i]);
      }
    }
    var listPingPong = numPingPong;
    return listPingPong;
  }

  $(document).ready(function(){
    $("#pingPong").submit(function(event){
      event.preventDefault();
      var number = parseInt($("#numInput").val());
      var result = pingPong(number);
        result.forEach(function(i){
        $("#output ul").append("<li>" + i + "</li>");
        $("#output").show();
      });
    });
  });
