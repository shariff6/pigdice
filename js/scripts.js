function Game(){
  this.initialscore = 0;
  this.currentscore = 0;
  this.finalscore = 0;
}
Game.prototype.Play = function () {
  var play = Math.floor(Math.random() * (6) + 1);
  if (play === 1) {
    alert ("gameover")
  }else {
    this.initialscore = this.currentscore += play
    $("p#score").append(play)
  };
};




$(document).ready(function() {
      $("form#playGame").submit(function (){
        event.preventDefault();
        Game.Play()
      })
    })
