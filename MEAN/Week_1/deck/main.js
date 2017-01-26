function Deck(){
  var self = this;
  var discarded = []
  this.Value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  this.Suits = ['Spades', 'Hearts', 'Clubs', 'Diamond'];
  this.Current = [];
}
Deck.prototype.shuffle = function(arr) {
  var copy = [], n = arr.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(arr.splice(i, 1)[0]);
    }
    this.Current = copy
    return copy
}

function Player(name){
  var self = this;
  this.Name = name;
  this.Hand = [];
}
Player.prototype.draw = function(deck){
  var n = deck.length;
  var card = []
    while (n) {
      card.push(deck[0])
      this.Hand.push(deck.splice(0, 1));
      return card
    }
}
Player.prototype.discard = function(hand, x) {
  var discarded = []
  var n = hand.length
  while (n) {
    discarded.push(hand.splice(x, 1));
    return discarded
  }
}

var Deck1 = new Deck();
var Player1 = new Player('Eric');

console.log(Deck1.Value)
console.log(Deck1.shuffle(Deck1.Value))
console.log(Deck1.Current)
console.log(Player1.draw(Deck1.Current))
console.log(Player1.draw(Deck1.Current))
console.log(Player1.draw(Deck1.Current))
console.log(Player1.Hand)
console.log(Player1.discard(Player1.Hand, 2))
console.log(Player1.Hand)
