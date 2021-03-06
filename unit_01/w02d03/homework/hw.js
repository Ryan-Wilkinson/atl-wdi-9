// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///

const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    Stopwatch.millisecs += 10;
    ViewEngine.updateTimeDisplay();
    if (Stopwatch.millisecs === 1000) {
    	Stopwatch.millisecs = 0;
    	Stopwatch.secs++;
    }
    if (Stopwatch.secs === 60) {
    	Stopwatch.secs = 0;
    	Stopwatch.mins++;
    }
  },
  reset: function(){
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
    ViewEngine.updateTimeDisplay();
  },

  start: function(){
   	Stopwatch.isRunning = true;
   	Stopwatch.tickClock();
  },

  stop: function(){
    Stopwatch.isRunning = false;
  },

  lap: function(){
    Stopwatch.laps.push(document.getElementById('time-display').innerHTML);
    ViewEngine.updateLapListDisplay();
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    $('#millisecs').text(Stopwatch.millisecs)
    $('#secs').text(Stopwatch.secs)
    $('#mins').text(Stopwatch.mins)
  },

  updateLapListDisplay: function(laps){
    $('#lap-list').append('<li>' + Stopwatch.laps[Stopwatch.laps.length - 1] + "</li>")
  },
};

const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
  },

  handleClickStart: function() {
    if (Stopwatch.isRunning === true) {
    	console.log('Stopwatch is Running.')
    }
    else {
    	Stopwatch.start();
    }
  },

  handleClickStopReset: function(){
    if (Stopwatch.isRunning === true) {
    	Stopwatch.stop();
    }
    else {
    	Stopwatch.reset();
    }
  },

  handleClickLap: function(){
    if (Stopwatch.isRunning === true) {
    	Stopwatch.lap();
    }
    else {
    	console.log('Stopwatch isnt running, nothing to lap.');
    }
  }
};

window.onload = function(){
	alert('ready to rock and roll')

	$('#start').on('click', AppController.handleClickStart);
	$('#stop').on('click', AppController.handleClickStopReset);
	$('#lap').on('click', AppController.handleClickLap);
};










