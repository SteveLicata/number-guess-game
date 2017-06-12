window.onload = function() {

  //global variables
  var displayNum = document.querySelector("#displaynum");
  var userNum = document.getElementById("usernumber");
  var userNumGuess = document.getElementById('usernumguess');
  var gameText = document.getElementById('gametext');
  var guessBtn = document.querySelector("#guessbtn");
  var newGameBtn = document.querySelector("#newgamebtn");
  var randomJSNums = document.getElementById('randomjsnums');
  var userNumDisplay = document.getElementById('usernumberdisplay');
  var whichNum = document.getElementById('whichnum');
  var whichNumDisplay = document.getElementById('whichnumdisplay');

  //game numbers variable
  // var num = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  // ];

  //game numbers varialble
  var num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  //'random' variable generates random number, holds random number
  var random = num[Math.floor(Math.random() * num.length)];
  console.log("random number is " + random);
  //hides number from DOM
  displayNum.style.display = "none";
  //text to display when game is played
  displayNum.innerHTML = "The number is: " + random;


  //empty array to display random numbers on DOM
  var randomNums = [];

  //generate random numbers to insert into empty randomNums array
  //https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
  for (var i = 0, t = 10; i < t; i++) {
    randomNums.push(Math.round(Math.random() * t));
  };

  //display random numbers on DOM in 1 second intervals
  if (randomNums !== null) {
    var i = 0;
    setInterval(function() {
      if (i == randomNums.length) {
        i = 0
      }
      randomJSNums.innerHTML = randomNums[i];
      i++;
      }, 1000);
      console.log(randomNums);
  };


  //start new game - refreshes page and generates new random number
  newGameBtn.addEventListener('click', function() {
    console.log('new game button clicked');
    window.location.reload();
  })


  //USER GUESS CLICK - compares random number to user guess and displays info on DOM
  guessBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log('guess button clicked');

    var userGuess = userNum.value;
    console.log("user number is " + userGuess);

    if (userGuess == random) {
      console.log('user guessed right, wins.');
      whichNum.style.display = "none";
      whichNumDisplay.innerHTML = "The number is: " + random;
      gameText.innerHTML = "Great guess! You win!";
      // displayNum.style.display = "unset";
      userNumGuess.innerHTML = "Your number is: " + userGuess;
      randomJSNums.style.display = "none";
      // userNumDisplay.innerHTML = random;
    } else if (userGuess != random && userGuess != null && userGuess != 0 && userGuess < 10){
      console.log('user guessed wrong, try again');
      whichNum.style.display = "none";
      whichNumDisplay.innerHTML = "The number is: " + random;
      gameText.innerHTML = "Start a new game and try again.";
      // displayNum.style.display = "unset";
      userNumGuess.innerHTML = "Your number is: " + userGuess;
      randomJSNums.style.display = "none";
      // userNumDisplay.innerHTML = random;
    } else if (userGuess == 0) {
      console.log("user guessed 0, invalid number");
      //covers 0, blank answer, empty space
      gameText.innerHTML = "Start a new game and enter a valid number";
    } else if (userGuess > 10){
      console.log("user guessed greater than 10, invalid number");
      gameText.innerHTML = "Start a new game and enter a valid number"
    } else {
      console.log("else");
    }


  }); //end user guess click





}; //end window onload
