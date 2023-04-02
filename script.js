// Get the start button, start/game/end pages, and back/play again buttons
const startBtn = document.getElementById("startBtn");
const startPage = document.getElementById("startPage");
const gamePage = document.getElementById("gamePage");
const endPage = document.getElementById("endPage");
const backBtn = document.getElementById("backBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

// Get the button, count, and timer elements
const clickBtn = document.getElementById("clickBtn");
const count = document.getElementById("count");
const timerBarFill = document.getElementById("timerBarFill");

// Keep track of the interval ID and time remaining
let intervalId;
let timeRemaining;

// Hide the game and end pages initially
gamePage.style.display = "none";
endPage.style.display = "none";

// Start the game when the start button is clicked
startBtn.addEventListener("click", function() {
	// Show the game page and hide the start page
	gamePage.style.display = "block";
	startPage.style.display = "none";

	// Set the initial count and time remaining
	let clickCount = 0;
	timeRemaining = 10;
	let timerWidth = 100;

	// Update the count when the button is clicked
	clickBtn.addEventListener("click", function() {
		clickCount++;
        if(timeRemaining<10 && timerWidth<100){
            timeRemaining+=0.2
            timerWidth+=2
        }
		count.innerHTML = clickCount;
	});

	// Update the timer every second
	intervalId = setInterval(function() {
		timeRemaining--;
		timerBarFill.style.width = timerWidth + "%";
        timerWidth -= 10;

		if (timeRemaining <= 0) {
			stopGame();
		}
	}, 1000);
});

// Add an event listener to the back button that shows the start page and hides the game page
backBtn.addEventListener("click", function() {
	stopGame();
	gamePage.style.display = "none";
	startPage.style.display = "block";
    endPage.style.display = "none";
});

// Add an event listener to the play again button that restarts the game
playAgainBtn.addEventListener("click", function() {
	endPage.style.display = "none";
	startPage.style.display = "block";
});

function stopGame() {
	clearInterval(intervalId);
	clickBtn.disabled = true;
	let score = count.innerHTML;
	finalScore.innerHTML = score;
	var imgHTML = ''

	if(score<=50){
		imgHTML = '<img src="./img/หน้าสรุป1.png" width="300" height="auto">';

	}else if(score>50 && score<150){
		imgHTML = '<img src="./img/หน้าสรุป3.png" width="300" height="auto">';
	}else{
		imgHTML = '<img src="./img/หน้าสรุป2.png" width="300" height="auto">';
	}

	var container = document.getElementById("imageContainer");
  	container.outerHTML = imgHTML;

    gamePage.style.display = "none";
	endPage.style.display = "block";
    clickCount = 0;
	timeRemaining = 10;
	timerWidth = 100;
    clickBtn.disabled = false;
}
