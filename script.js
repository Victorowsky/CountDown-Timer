const days = document.querySelector("#days");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const seconds = document.querySelector("#seconds");
const svg = document.querySelector(".icon");
const newDate = new Date();

console.log(svg);

let secondsCounter = newDate.getSeconds();
let minutesCounter = newDate.getMinutes();
let hoursCounter = newDate.getHours();
let daysCounter = newDate.getDate();

days.textContent = daysCounter;
minutes.textContent = minutesCounter;
seconds.textContent = secondsCounter;
hours.textContent = hoursCounter;

let countDownInterval = null;

setInterval(() => {
	countDownInterval = countDownSecodns();
}, 1000);

const countDownSecodns = () => {
	if (!hoursCounter && !daysCounter && !minutesCounter && !secondsCounter) {
		return clearInterval(countDownInterval); // IF ENDS TIMER STOPS
	}

	if (secondsCounter > 0) {
		// ONLY SECONDS DECREMENT
		seconds.textContent = --secondsCounter;
	} else {
		// SECONDS GOES 59 AND MINUTES DECREMENT
		secondsCounter = 59;
		seconds.textContent = secondsCounter;

		// MINUTES DECREMNT
		if (minutesCounter > 0) {
			minutes.textContent = --minutesCounter;
		} else {
			// IF 0
			minutesCounter = 59;
			minutes.textContent = minutesCounter;
		}
	}
	// DECREMENT HOURS
	if (secondsCounter === 59 && minutesCounter === 59) {
		if (hoursCounter > 0 && hoursCounter < 24) {
			hours.textContent = --hoursCounter;
		} else if (hoursCounter === 0) {
			hoursCounter = 23;
			hours.textContent = hoursCounter;
		}
	}
	// DECREMENT DAYS
	if (secondsCounter === 59 && minutesCounter === 59 && hoursCounter === 23) {
		if (!daysCounter) return false;
		days.textContent = --daysCounter;
	}

	InsertZeroBeforeNumbers();
};

const InsertZeroBeforeNumbers = () => {
	const counterAndSelector = [
		{ counter: secondsCounter, ref: seconds },
		{ counter: minutesCounter, ref: minutes },
		{ counter: hoursCounter, ref: hours },
		{ counter: daysCounter, ref: days },
	];

	counterAndSelector.forEach((element) => {
		if (element.counter < 10) {
			element.ref.textContent = `0${element.counter}`;
		}
	});
};
