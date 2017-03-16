var calculate = function(hourhand, minutehand) {

if (hourhand > 12 || hourhand < 0 || minutehand > 59 || minutehand < 0) {
	return "out of range"
};

var hoursAsMinutes = (hourhand * 5) + (minutehand / 12);
var minutes = minutehand;

	if (hoursAsMinutes > 60) {
		hoursAsMinutes -= 60;
	};

var angleOfHands ;

	if (hoursAsMinutes > minutes) {
		angleOfHands = (hoursAsMinutes - minutes) * 6;
	}

	else {
		angleOfHands = (minutes - hoursAsMinutes) * 6;
	}

	return [angleOfHands, 360 - angleOfHands];

};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
