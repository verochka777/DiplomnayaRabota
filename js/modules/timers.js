const timers = document.querySelectorAll('.count-wrap');

timers.forEach(timer => {
	let days = 7;
	let hours = 24;
	let minutes = 60;
	let seconds = 60;

	let date = new Date(Date.parse(new Date()) + days * hours * minutes * seconds * 1000);
	initializeClock(timer, date);

	function initializeClock(timer, endtime) {
		let clock = timer;
		let daysSpan = clock.querySelector('.count_1 span');
		let hoursSpan = clock.querySelector('.count_2 span');
		let minutesSpan = clock.querySelector('.count_3 span');
		let secondsSpan = clock.querySelector('.count_4 span');
		function updateClock() {
			let t = getTimeRemaining(endtime);
			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
		updateClock();
		let timeinterval = setInterval(updateClock, 1000);
	}

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
});