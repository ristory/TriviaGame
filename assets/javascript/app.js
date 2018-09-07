
$(".content").hide();
window.onload = function () {
    $(".btn").on("click",function()
    {
        stopwatch.start();
        $(".btn").hide();
        $(".content").show();
        
    });

  }

var answer = ["Faithful","Intelligent","Playful","Tusks","Biodegradable","Atmosphere","Solar energy","Oil tankers","Deforestation","Habitat"]
var challenge = {
  question1:["If a married man refrains from having affairs with other women we can say that he is","Loyal","Endearing","Faithful","Reassuring"],

  question2:["What is the most suitable word to describe someone who is a deep and systematic thinker","Clever","Smart","Intelligent","Dull"],

  question3:["Animals which like to play can be said to be","Play-liking","Play-centered","Playful","Players"],

  question4:["Elephants are able to kill and injure other animals by making use of sharp and pointed things called","Long teeth","Tusks","Trunks","Hooves"],

  question5:["Substances which dissolve into the ground after being thrown away are said to be","Environmentally friendly","Biodegradable","Untraceable","Dis-solvent"],

  question6:["The layer of air surrounding the earth, and which is a source of oxygen, is called","The outer layer","Stratosphere","Ozone layer","Atmosphere"],

  question7:["When we make use of the sun to produce power, we call this type of power","Solar energy","Sun energy","Light energy","Solar force"],

  question8:["Ships used to transport oil are called","Oil ships","Oil tanks","Oil tankers","Oil boats"],

  question9:["What word or words describe the gradual decline in the amount of land occupied by forests","Forest shrinking","Forest decline","Forest declining","Deforestation"],

  question10:["The area of land that animals occupy, and which they depend on as a source of food, is called","Habitation","Habitat","Arable","Land territory"],
}

var array = [challenge.question1, challenge.question2,challenge.question3,challenge.question4,challenge.question5,challenge.question6,challenge.question7,
  challenge.question8,challenge.question9,challenge.question10];

for(i = 1; i <11; i++)
{   
    var random = array[Math.floor(Math.random()*10)];
    var number = (array.splice(array.indexOf(random), 1));
    var randomnumber =  number[0]; 
 
    $("#question").text(randomnumber[0]); 
    $(".answer1").text(randomnumber[1])  
    $(".answer2").text(randomnumber[2]) 
    $(".answer3").text(randomnumber[3]) 
    $(".answer4").text(randomnumber[4]) 
}

var intervalId  
var clockRunning = false

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
