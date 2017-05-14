function Game(currentScore, finalScore) {
  this.currentScore = currentScore
  this.finalScore = finalScore
}
Game.prototype.roll = function() {
  var play = Math.floor(Math.random() * (6) + 1);
  if (play === 1) {
    this.currentScore = 0
  } else {
    this.currentScore += play
  }
  return play
}
Game.prototype.result = function() {
  this.finalScore = this.currentScore + this.finalScore
}
$(document).ready(function() {
  $("button#begin").click(function() {
    event.preventDefault()
    $(".manual").hide(1000);
    $(".test").show(1000);
  })
  $("form#player1").submit(function() {
    event.preventDefault()
    $(".side1").show(1000);
    $("form#player1").hide(1000);
    var inputName1 = $("input#name1").val();
    $("h1#playerName1").append(inputName1)
  })
  $("form#player2").submit(function() {
    event.preventDefault()
    $(".side2").show(1000);
    $("form#player2").hide(1000);
    var inputName2 = $("input#name2").val();
    $("h1#playerName2").append(inputName2)
  })

  $(function() {
    var bothPlayers = [];
    var player1 = new Game(0, 0)
    var player2 = new Game(0, 0)
    bothPlayers.push(player1)
    bothPlayers.push(player2)
    $("button#roll1").click(function() {
      event.preventDefault()
      var inputName1 = $("input#name1").val();
      var player1result = player1.roll()
      if (player1result === 1) {
        $("#results").show(500)
        $("#results2").hide(500)
        $("button#roll1").attr("disabled", "disabled")
        $("button#HOLD").attr("disabled", "disabled")
        $("button#roll2").removeAttr("disabled")
        $("button#HOLD2").removeAttr("disabled")
      }
      $(".currentscore1").text(player1result)
      $(".finalscore1").text(player1.currentScore)
      if (player1.currentScore >= 20) {
        $(".game").hide(5000)
        $(".end").show().text(inputName1 + " " + "WINS WITH " + player1.currentScore + " POINTS")
        $(".restart").show()
      }

    })
    $("button#HOLD").click(function() {
      event.preventDefault()
      $("#results").show(500)
      $("#results2").hide(500)
      $("#result").hide(500)
      $("#results1").show(500)
      $(".score").text(player1.currentScore)
      $("button#HOLD").attr("disabled", "disabled")
      $("button#roll2").removeAttr("disabled")
      $("button#roll1").attr("disabled", "disabled")
      $("button#HOLD2").removeAttr("disabled")
    })
    $("button#roll2").click(function() {
      event.preventDefault()
      var inputName2 = $("input#name2").val();
      var player2result = player2.roll()
      if (player2result === 1) {
        $("#result").show(500)
        $("#results1").hide(500)
        $("button#roll2").attr("disabled", "disabled")
        $("button#HOLD2").attr("disabled", "disabled")
        $("button#roll1").removeAttr("disabled")
        $("button#HOLD").removeAttr("disabled")
      }
      $(".currentscore2").text(player2result)
      $(".finalscore2").text(player2.currentScore)
      if (player2.currentScore >= 20) {
        $(".game").hide(5000)
        $(".end").show().text(inputName2 + " " + "WINS WITH " + player2.currentScore + " POINTS")
        $(".restart").show()
      }
    })


    $("button#HOLD2").click(function() {
      event.preventDefault()
      $("#result").show(500)
      $("#results1").hide(500)
      $("#results").hide(500)
      $("#results2").show(500)
      $(".score2").text(player2.currentScore)
      $("button#roll1").removeAttr("disabled")
      $("button#roll2").attr("disabled", "disabled")
      $("button#HOLD2").attr("disabled", "disabled")
      $("button#HOLD").removeAttr("disabled")
    })

    })
  })
