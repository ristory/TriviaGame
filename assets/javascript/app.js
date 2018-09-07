
$(".content").hide();
window.onload = function () {
    $(".btn").on("click",function()
    {
        stopwatch.start();
        $(".btn").hide();
        $(".content").show();
        
    });

  }

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i = 0; i <10; i++)
{   
    var random = array[Math.floor(Math.random()*array.length) + 1];
    console.log(random)
    if ( array[i] === random) 
        {
            array.splice(i, 1); 
        }
        console.log(array)   
}

var intervalId
var clockRunning = false
var challenge = {
    question1: "If a married man refrains from having affairs with other women we can say that he is",
    answer1A: "Loyal",
    answer1B: "Endearing",
    answer1C: "Faithful",
    answer1D: "Reassuring",

    question2: "What is the most suitable word to describe someone who is a deep and systematic thinker",
    answer2A: "Clever",
    answer2B: "Smart",
    answer2C: "Intelligent",
    answer2D: "Dull",

    question3: "Animals which like to play can be said to be",
    answer3A: "Play-liking",
    answer3B: "Play-centered",
    answer3C: "Playful",
    answer3D: "Players",

    question4: "Elephants are able to kill and injure other animals by making use of sharp and pointed things called",
    answer4A: "Long teeth",
    answer4B: "Tusks",
    answer4C: "Trunks",
    answer4D: "Hooves",

    question5: "Substances which dissolve into the ground after being thrown away are said to be",
    answer5A: "Environmentally friendly",
    answer5B: "Biodegradable",
    answer5C: "Untraceable",
    answer5D: "Dis-solvent",

    question6: "The layer of air surrounding the earth, and which is a source of oxygen, is called",
    answer6A: "The outer layer",
    answer6B: "Stratosphere",
    answer6C: "Ozone layer",
    answer6D: "RAtmosphere",

    question7: "When we make use of the sun to produce power, we call this type of power",
    answer7A: "Solar energy",
    answer7B: "Sun energy",
    answer7C: "Light energy",
    answer7D: "Solar force",

    question8: "Ships used to transport oil are called",
    answer8A: "Oil ships",
    answer8B: "Oil tanks",
    answer8C: "Oil tankers ",
    answer8D: "Oil boats",

    question9: "What word or words describe the gradual decline in the amount of land occupied by forests",
    answer9A: "Forest shrinking",
    answer9B: "Forest decline",
    answer9C: "Forest declining",
    answer9D: "Deforestation",

    question10: "The area of land that animals occupy, and which they depend on as a source of food, is called",
    answer10A: "Habitation",
    answer10B: "Habitat",
    answer10C: "Arable",
    answer10D: "Land territory",
}
var stopwatch = {

  time: 10,
  lap: 1,

  reset: function () {
    stopwatch.time = 0
    stopwatch.lap = 1

    $("#display").text("Time Remaining: 0 Seconds")
  },

  start: function () {
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000)
      clockRunning = true
    }
  },
  stop: function () {
    clearInterval(intervalId)
    clockRunning = false
  },

  count: function () {

    stopwatch.time--;
    $("#display").text("Time Remaining: " +  stopwatch.time + " Seconds")
    if(stopwatch.time === 0)
    {
        stopwatch.stop();
        stopwatch.reset();
    }
  }
}
