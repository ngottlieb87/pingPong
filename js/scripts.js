  function pingPong(number){

    indvNum=[];
    numPingPong=[];

    for(i = number; i > 0; i--){
      indvNum.push(i);
    }

    indvNum.reverse();

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
    listPingPong = numPingPong;
    return listPingPong;
  }

  $(document).ready(function(){
    $("#pingPong").submit(function(event){
      event.preventDefault();

      var number = parseInt($("#numInput").val());
      var result = pingPong(number);

    });
  });
