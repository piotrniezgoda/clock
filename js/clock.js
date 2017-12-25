const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const digital = document.querySelector('#digiTime');
function getDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegree = (seconds/60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;

	const minutes = now.getMinutes();
	const minutesDegree = (minutes/60) * 360 +90 ;
	minHand.style.transform = `rotate(${minutesDegree}deg)`;

	const hours = now.getHours();
	const hoursDegree = (hours/24) * 360 + 90;
	hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

	
   digital.innerHTML = zero(hours) + ':' + zero(minutes) + ':' + zero(seconds);

	
}

	function zero(toCheck) {
	    if (toCheck < 10) {
	      toCheck = '0' + toCheck
	    }
	    return toCheck;
	  }

setInterval(getDate, 1000);