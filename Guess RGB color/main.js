window.onload = () => {
  /*
    var colorNames = [
            {red:[123,133,200]},
            {blue:[120,45,100]}
            ];
    */

  var app = new Vue({
    el: "#app",
    data: {
      CL: 256,
      red: 0,
      green: 0,
      blue: 0,
      gusessNumber: {
        red: 0,
        green: 0,
        blue: 0,
      },
      guessResult: {
        dr: 0,
        dg: 0,
        db: 0,
        correct: 0,
        cal: false,
      },
      showResult: false,
      guessed: false,
    },
    methods: {
      guess: function () {
        this.showResult = true;
        this.guessResult.cal = true;
        this.guessResult.dr = (
          100 -
          ((this.red - this.gusessNumber.red) / this.CL) * 100
        ).toFixed(1);

        this.guessResult.dg = (
          100 -
          ((this.green - this.gusessNumber.green) / this.CL) * 100
        ).toFixed(1);

        this.guessResult.db = (
          100 -
          ((this.blue - this.gusessNumber.blue) / this.CL) * 100
        ).toFixed(1);

        this.guessResult.correct =
          (Number(this.guessResult.dr) +
            Number(this.guessResult.dg) +
            Number(this.guessResult.db)) /
          3;
        this.guessResult.correct = this.guessResult.correct.toFixed(1);

        this.guessed = true;
      },
      generateRandomColor: function () {
        this.reset();
        this.red = Math.floor(Math.random() * 256);
        this.blue = Math.floor(Math.random() * 256);
        this.green = Math.floor(Math.random() * 256);
        this.guessed = false;
      },
      showCorrect: function () {
        this.gusessNumber.red = this.red;
        this.gusessNumber.green = this.green;
        this.gusessNumber.blue = this.blue;
        this.guess();
        this.showResult = false;
      },
      reset: function () {
        (this.gusessNumber.red = 0),
          (this.gusessNumber.green = 0),
          (this.gusessNumber.blue = 0),
          (this.guessResult.cal = false);
        this.showResult = false;
      },
    }, //end mothods obj.
  });

  app.generateRandomColor();
};
