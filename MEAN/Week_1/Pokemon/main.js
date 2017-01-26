var game = {
  players: [],
  addPlayer: function(player){
    game.players.push(player);
  }
};


function play(){
  document.getElementById("player1").innerHTML = game.players[0].name
  document.getElementById("player2").innerHTML = game.players[1].name
}

window.onload = function() {
  play();
}


function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

var player1 = playerConstructor('Eric')
var player2 = playerConstructor('charlie')
// console.log(player1)
// console.log(player2)

game.addPlayer(player1)
game.addPlayer(player2)


var x = Math.floor(Math.random()*151)+1
var y = Math.floor(Math.random()*151)+1


$(document).ready(function(){
    $.get("http://pokeapi.co/api/v1/pokemon/"+x, function(res) {
        $('#pokemon1').html('<h2>' + res.name + '</h2>')
    }, "json");
    $.get("http://pokeapi.co/api/v1/pokemon/"+y, function(res) {
        $('#pokemon2').html('<h2>' + res.name + '</h2>')
    }, "json");
})
