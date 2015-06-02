var five = require("../lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {
  var virtual = new five.Board.Virtual(
    new five.Expander({
      controller: "PCF8591",
      // vref:
    })
  );

  var a = new five.Sensor({
    pin: "A3",
    board: virtual
  });

  a.on("change", function() {
    console.log(this.value);
  });
});
