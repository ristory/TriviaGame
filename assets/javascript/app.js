
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
var rightanswer = 0;
var wrong = 0;
var noanswer = 0;
var firstclick = false;
var firsttrue = true;
var finish = false;
var random;
var number;
var randomnumber;
var end = 0;
var a;
var b;
var c;
var d;
var resultanswer;

$(".content").hide();
$(".reset").hide();
window.onload = function () {
    $(".startgame").on("click",function()
    {
      startquestion();
      stopwatch.start();
      $(".btn").hide();
      $(".content").show(); 
    });

    $(".reset").on("click",function()
    {
      end = 0;
      rightanswer = 0;
      wrong = 0;
      noanswer = 0;
      firstclick = false;
      firsttrue = true;
      finish = false;
      array = [challenge.question1, challenge.question2,challenge.question3,challenge.question4,challenge.question5,challenge.question6,challenge.question7,
        challenge.question8,challenge.question9,challenge.question10];
      
      nextquestion();
      $(".reset").hide();
      $("#rightanswer").hide();
      $(".content").show();
    });

    $(".answer1").on("click",function()
    {
        if (firstclick === false)
        {
          firstclick = true;
          answer.forEach(function(element) {
            if (element === a)
            {
              rightanswer++;
              firsttrue = false;
              $("#response").text("Goodjob!! You're right");
              $("#result").text("You got " + rightanswer + " point");
              stopwatch.stop();
              stopwatch.reset();  
            }
          });
            if(firsttrue === true && $(".answer1").val() !=a )
            {
              wrong++;
              console.log(wrong)
              $("#rightanswer").show();
              firsttrue = false;
              $("#response").text("You got a wrong answer!!!");
              stopwatch.stop();
              stopwatch.reset();
              answer.forEach(function(element) {
              resultanswer.forEach(function(data)
              { 
                if(element === data)
                {
                  $("#rightanswer").text("The correct answer is " + data);              
                }
              })})
            }
            setTimeout(nextquestion,3000);
          }});         

    $(".answer2").on("click",function()
    {
      if (firstclick === false)
      {
        firstclick = true;
        answer.forEach(function(element) {
          if (element === b)
          {
            rightanswer++;
            firsttrue = false;
            $("#response").text("Goodjob!! You're right");
            $("#result").text("You got " + rightanswer + " point");
            stopwatch.stop();
            stopwatch.reset();
          }
        });
          if(firsttrue === true && $(".answer2").val() != b)
          {
            wrong++;
            console.log(wrong)
            $("#rightanswer").show();
            firsttrue = false;
            $("#response").text("You got a wrong answer");
            stopwatch.stop();
            stopwatch.reset() 
            answer.forEach(function(element) {
              resultanswer.forEach(function(data)
              { 
                if(element === data)
                {
                  $("#rightanswer").text("The correct answer is " + data);              
                }
              })})
            }
            setTimeout(nextquestion,3000);
      }});     

    $(".answer3").on("click",function()
    {
      if (firstclick === false)
      {
        firstclick = true;
        answer.forEach(function(element) {
          if (element === c)
          {
            rightanswer++;
            firsttrue = false;
            $("#response").text("Goodjob!! You're right");
            $("#result").text("You got " + rightanswer + "point");
            stopwatch.stop();
            stopwatch.reset();
          }
        });
          if(firsttrue === true && $(".answer3").val() != c)
          {
            wrong++;
            console.log(wrong)
            $("#rightanswer").show();
            firsttrue = false;
            $("#response").text("You got a wrong answer");
            stopwatch.stop();
            stopwatch.reset()
            answer.forEach(function(element) {
              resultanswer.forEach(function(data)
              { 
                if(element === data)
                {
                  $("#rightanswer").text("The correct answer is " + data);              
                }
              })})
            }
            setTimeout(nextquestion,3000);
          }});     

    $(".answer4").on("click",function()
    {
      if (firstclick === false)
      {
        firstclick = true;
        answer.forEach(function(element) {  
          if (element === d)
          {
            rightanswer++;
            firsttrue = false;
            $("#response").text("Goodjob!! You're right");
            $("#result").text("You got " + rightanswer + "point");
            stopwatch.stop();
            stopwatch.reset();
          }
        });
          if(firsttrue === true && $(".answer4").val() !=d)
          {
            wrong++;
            console.log(wrong)  
            $("#rightanswer").show();
            firsttrue = false;
            $("#response").text("You got a wrong answer");
            stopwatch.stop();
            stopwatch.reset();
            answer.forEach(function(element) {
              resultanswer.forEach(function(data)
              { 
                if(element === data)
                {
                  $("#rightanswer").text("The correct answer is " + data);              
                }
              })})
            }
            setTimeout(nextquestion,3000);
          }});     

  }

function startquestion()
{ 
    random = array[Math.floor(Math.random()*10)];
    number = (array.splice(array.indexOf(random), 1));
    randomnumber =  number[0]; 
    $("#question").text(randomnumber[0]); 
    a = randomnumber[1];
    b = randomnumber[2];
    c = randomnumber[3];
    d = randomnumber[4];
    resultanswer = new Array(a,b,c,d)
    $(".answer1").text(a)  
    $(".answer2").text(b) 
    $(".answer3").text(c) 
    $(".answer4").text(d) 
}

function nextquestion()
{
  firstclick = false;
  firsttrue = true;
  end++;
  $("#rightanswer").hide();
  $("#response").empty();
  $("#result").empty();
  $("#display").text("Time Remaining: 10 Seconds");
  stopwatch.time = 10;
  stopwatch.start();
  if( end === 10)
  {
    $(".content").hide();
    stopwatch.stop();
    $(".reset").show();
    $(".reset").text("Start Over!!!!");
    endfunc();
  }
  else
  {
    startquestion();
  }
}

function endfunc()
{
  finish = true;
  $("#response").text("Congrat!!! You finished all the questions");
  $("#result").html(
    `<h3>Correct Answer: ${rightanswer}</h3>
    <h3>Wrong Answer: ${wrong}</h3>
    <h3>No Answer: ${noanswer}</h3>
    `
    );
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
        noanswer++;
        stopwatch.stop();
        stopwatch.reset();
        nextquestion();
       }
  }
} 
