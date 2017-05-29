window.onload = function() {

  var displayNum = document.querySelector("#displaynum");
  var userNum = document.getElementById("usernumber");
  var userNumGuess = document.getElementById('usernumguess');
  var gameText = document.getElementById('gametext');
  var guessBtn = document.querySelector("#guessbtn");
  var newGameBtn = document.querySelector("#newgamebtn");


  var num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ];
  // console.log(num);


  //generates random number, holds random number in 'random' variable
  var random = num[Math.floor(Math.random() * num.length)];
  console.log("random number is " + random);

  displayNum.style.display = "none";
  displayNum.innerHTML = "The random number is: " + random;



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
      gameText.innerHTML = "Great guess! You win!";
      displayNum.style.display = "unset";
      userNumGuess.innerHTML = "Your number is: " + userGuess;
    } else {
      console.log('try again');
      gameText.innerHTML = "Try again.";
      displayNum.style.display = "unset";
      userNumGuess.innerHTML = "Your number is: " + userGuess;
    }



  }); //end user guess click





}; //end window onload
