    $(function () {
      $('#deal-button').click(function(){
          $('#dealer-hand').append('<img src="img/PNG/2C.png" class="card">');
          $('#dealer-hand').append('<img src="img/PNG/3H.png" class="card">');
          $('#player-hand').append('<img src="img/PNG/QC.png" class="card">');
          $('#player-hand').append('<img src="img/PNG/JH.png" class="card">');
      });
      $('#hit-button').click(function(){
          $('#player-hand').append('<img src="img/PNG/AH.png" class="card">');
      });
      
    });
