//var suit = ['C','H','D','S'];
//var type = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//var combo = []
var H2 = { point: 2, suit: 'H', image: 'img/PNG/2H.png' };
var H3 = { point: 3, suit: 'H', image: 'img/PNG/3H.png' };
var H4 = { point: 4, suit: 'H', image: 'img/PNG/4H.png' };
var H5 = { point: 5, suit: 'H', image: 'img/PNG/5H.png' };
var H6 = { point: 6, suit: 'H', image: 'img/PNG/6H.png' };
var H7 = { point: 7, suit: 'H', image: 'img/PNG/7H.png' };
var H8 = { point: 8, suit: 'H', image: 'img/PNG/8H.png' };
var H9 = { point: 9, suit: 'H', image: 'img/PNG/9H.png' };
var H10 = { point: 10, suit: 'H', image: 'img/PNG/10H.png' };
var HJ = { point: 10, suit: 'H', image: 'img/PNG/JH.png' };
var HQ = { point: 10, suit: 'H', image: 'img/PNG/QH.png' };
var HK = { point: 10, suit: 'H', image: 'img/PNG/KH.png' };
var HA = { point: 1, suit: 'H', image: 'img/PNG/AH.png' };
var D2 = { point: 2, suit: 'D', image: 'img/PNG/2D.png' };
var D3 = { point: 3, suit: 'D', image: 'img/PNG/3D.png' };
var D4 = { point: 4, suit: 'D', image: 'img/PNG/4D.png' };
var D5 = { point: 5, suit: 'D', image: 'img/PNG/5D.png' };
var D6 = { point: 6, suit: 'D', image: 'img/PNG/6D.png' };
var D7 = { point: 7, suit: 'D', image: 'img/PNG/7D.png' };
var D8 = { point: 8, suit: 'D', image: 'img/PNG/8D.png' };
var D9 = { point: 9, suit: 'D', image: 'img/PNG/9D.png' };
var D10 = { point: 10, suit: 'D', image: 'img/PNG/10D.png' };
var DJ = { point: 10, suit: 'D', image: 'img/PNG/JD.png' };
var DQ = { point: 10, suit: 'D', image: 'img/PNG/QD.png' };
var DK = { point: 10, suit: 'D', image: 'img/PNG/KD.png' };
var DA = { point: 1, suit: 'D', image: 'img/PNG/AD.png' };
var C2 = { point: 2, suit: 'C', image: 'img/PNG/2C.png' };
var C3 = { point: 3, suit: 'C', image: 'img/PNG/3C.png' };
var C4 = { point: 4, suit: 'C', image: 'img/PNG/4C.png' };
var C5 = { point: 5, suit: 'C', image: 'img/PNG/5C.png' };
var C6 = { point: 6, suit: 'C', image: 'img/PNG/6C.png' };
var C7 = { point: 7, suit: 'C', image: 'img/PNG/7C.png' };
var C8 = { point: 8, suit: 'C', image: 'img/PNG/8C.png' };
var C9 = { point: 9, suit: 'C', image: 'img/PNG/9C.png' };
var C10 = { point: 10, suit: 'C', image: 'img/PNG/10C.png' };
var CJ = { point: 10, suit: 'C', image: 'img/PNG/JC.png' };
var CQ = { point: 10, suit: 'C', image: 'img/PNG/QC.png' };
var CK = { point: 10, suit: 'C', image: 'img/PNG/KC.png' };
var CA = { point: 1, suit: 'C', image: 'img/PNG/AC.png' };
var S2 = { point: 2, suit: 'S', image: 'img/PNG/2S.png' };
var S3 = { point: 3, suit: 'S', image: 'img/PNG/3S.png' };
var S4 = { point: 4, suit: 'S', image: 'img/PNG/4S.png' };
var S5 = { point: 5, suit: 'S', image: 'img/PNG/5S.png' };
var S6 = { point: 6, suit: 'S', image: 'img/PNG/6S.png' };
var S7 = { point: 7, suit: 'S', image: 'img/PNG/7S.png' };
var S8 = { point: 8, suit: 'S', image: 'img/PNG/8S.png' };
var S9 = { point: 9, suit: 'S', image: 'img/PNG/9S.png' };
var S10 = { point: 10, suit: 'S', image: 'img/PNG/10S.png' };
var SJ = { point: 10, suit: 'S', image: 'img/PNG/JS.png' };
var SQ = { point: 10, suit: 'S', image: 'img/PNG/QS.png' };
var SK = { point: 10, suit: 'S', image: 'img/PNG/KS.png' };
var SA = { point: 1, suit: 'S', image: 'img/PNG/AS.png' };

var deck = [
H2,H3,H4,H5,H6,H7,H8,H9,H10,HJ,HQ,HK,HA,
D2,D3,D4,D5,D6,D7,D8,D9,D10,DJ,DQ,DK,DA,
C2,C3,C4,C5,C6,C7,C8,C9,C10,CJ,CQ,CK,CA,
S2,S3,S4,S5,S6,S7,S8,S9,S10,SJ,SQ,SK,SA
];

var playerHand = [];
var dealerHand = [];
var dealerPoints = 0;
var playerPoints = 0;

/*$(document).ready(function () {
      $('#dealer-points').text(dealerPoints);
      $('#player-points').text(playerPoints);
    });*/

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function deal (d) {
  var removed = d.splice(0,4);
  var toDealer = removed.splice(0,2);
  var toPlayer = removed.splice(0,2);
  playerHand.push(toPlayer);
  dealerHand.push(toDealer);
  console.log(playerHand);
  console.log(dealerHand);
}

function hit (e) {
  var removed = e.splice(0,1);
  //var toDealer = removed.splice(0,2);
  var toPlayer = removed.splice(0,1);
  playerHand[0].push(toPlayer[0]);
  //dealerHand.push(toDealer);
  console.log(playerHand);
  console.log(dealerHand);
}

function dealerHit (f) {
  var removed = f.splice(0,1);
  var toDealer = removed.splice(0,1);
  //var toPlayer = removed.splice(0,1);
  //playerHand[0].push(toPlayer[0]);
  dealerHand[0].push(toDealer[0]);
  console.log(playerHand);
  console.log(dealerHand);
}

function calcPoints (arr) {
  var subset = arr.map(function(item){
    return item.point;
  });
  var total = subset.reduce(function(a,b){
   return a + b;
  });
  return total;
  console.log(total);
}

 
 $(function () {
      $('#deal-button').click(function(){
         deck = shuffle(deck);
         deal(deck);
         $('#dealer-hand').append('<img src="'+dealerHand[0][0].image+'" class="card">');
         $('#dealer-hand').append('<img src="'+dealerHand[0][1].image+'" class="card">');
         $('#player-hand').append('<img src="'+playerHand[0][0].image+'" class="card">');
         $('#player-hand').append('<img src="'+playerHand[0][1].image+'" class="card">');
         $(document).ready(function () {
           $('#player-points').text(calcPoints(playerHand[0]));
           $('#dealer-points').text(calcPoints(dealerHand[0]));
         });
         if(calcPoints(playerHand[0]) == 21){
           alert('YOU WIN!!!')
         }
      });
      $('#hit-button').click(function(){
        hit(deck);
        $('#player-hand').append('<img src="'+playerHand[0][playerHand[0].length-1].image+'" class="card">');
        $(document).ready(function () {
           $('#player-points').text(calcPoints(playerHand[0]));
           $('#dealer-points').text(calcPoints(dealerHand[0]));
         });
         if(calcPoints(playerHand[0]) == 21){
           alert('YOU WIN!!! :-D');
           } else if (calcPoints(playerHand[0]) > 21) {
             alert('YOU BUSTED! :-(');
           }
         
      });
      $('#stand-button').click(function(){
        while(calcPoints(dealerHand[0]) < calcPoints(playerHand[0])) {
        dealerHit(deck);
        $('#dealer-hand').append('<img src="'+dealerHand[0][dealerHand[0].length-1].image+'" class="card">');
        $(document).ready(function () {
           $('#player-points').text(calcPoints(playerHand[0]));
           $('#dealer-points').text(calcPoints(dealerHand[0]));
         });
         if(calcPoints(dealerHand[0]) == 21){
           alert('Dealer Wins :-/');
           } else if (calcPoints(dealerHand[0]) > 21) {
             alert('YOU WIN!!! :-D');
           } else if (calcPoints(dealerHand[0]) > calcPoints(playerHand[0])) {
             alert('Dealer Wins :-/')
           } else if (calcPoints(dealerHand[0]) == calcPoints(playerHand[0])) {
             alert('Push...Oh Well!')
           }
        }
      });
      
      
    });
