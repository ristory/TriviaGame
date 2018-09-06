$("#btn").on("click",function()
{

});

window.onload = function () {
    //  Click events are done for us:
    $("#btn").on("click",function()
    {

    });
    $('#stop').click(stopwatch.stop)
    $('#reset').click(stopwatch.reset)
    $('#start').click(stopwatch.start)
  }

  //  Variable that will hold our setInterval that runs the stopwatch
var intervalId

// prevents the clock from being sped up unnecessarily
var clockRunning = false

//  Our stopwatch object.
var stopwatch = {

  time: 10,
  lap: 1,

  reset: function () {
    stopwatch.time = 0
    stopwatch.lap = 1

    $("#display").text("Time Remaining: 0 Second")
  },

  start: function () {
    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000)
      clockRunning = true
    }
  },
  stop: function () {
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId)
    clockRunning = false
  },

  count: function () {

    stopwatch.time--
    const convertedTime = stopwatch.timeConverter(stopwatch.time)
    $("#display").text("Time Remaining:" +  convertedTime + "Seconds")
  },

  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  timeConverter: function (t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60)
    var seconds = t - (minutes * 60)

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    if (minutes === 0) {
      minutes = '00'
    } else if (minutes < 10) {
      minutes = '0' + minutes
    }

    return minutes + ':' + seconds
  }
}