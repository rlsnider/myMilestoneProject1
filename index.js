//set arrays for functions to read

let answers=["SHADOW", "NOTHING", "YOUR NAME", "THE DARK", "BOOKKEEPER"]



//set all buttons ivisible except for start button.

document.getElementById('ask-question1').style.display="";
document.getElementById('answer-question1').style.display="none";
document.getElementById('ask-question2').style.display="none";
document.getElementById('answer-question2').style.display="none";
document.getElementById('ask-question3').style.display="none";
document.getElementById('answer-question3').style.display="none";
document.getElementById('ask-question4').style.display="none";
document.getElementById('answer-question4').style.display="none";
document.getElementById('ask-question5').style.display="none";
document.getElementById('answer-question5').style.display="none";
document.getElementById('final-dialog').style.display="none";
document.getElementById('restart-game').style.display="none";
document.getElementById('score').style.display="none";
document.getElementById('cross-bridge').style.display="none"


//These are the fieldset containers
document.getElementById('fieldset1').style.display="none"
document.getElementById('fieldset2').style.display="none"
document.getElementById('fieldset3').style.display="none"
document.getElementById('fieldset4').style.display="none"
document.getElementById('fieldset5').style.display="none"
document.getElementById('fieldset6').style.display="none"
//div for final scene scene
document.getElementById('wolf').style.display="none"
//set UserScore 

//add one to score if answer is correct, 0 if answer is wrong; 
//Store score in var; displays score on page.

function yourScore(){
    document.getElementById('score').innerHTML=`Your score is ${userScore}`

}


//functions for uncovering and covering buttons and statements

function askQuestion1(){
    console.log("ask Question 1 was clicked")
    document.getElementById('ask-question1').style.display="none";
    document.getElementById('answer-question1').style.display="";
    document.getElementById('startup').style.display="none";
    document.getElementById('fieldset1').style.display="";
    document.getElementById('dialog1').innerHTML="Only one color, but not one size,<br> stuck at the bottom, yet easily flies.<br> Present in sun, but not in rain,<br> doing no harm and feeling no pain.<br> What am I?";
    document.getElementById('question1').style.display="";
}
let userScore = 0;
//waits for onclick from button, answerQuestion1
//turn off display of askQuestion1, open up answerQuestion1 turn of dialog1
//compare userinput to 0 in answer array, if match, print dialog, turn off answerQuestion1 open up askQuestion2.



 function answerQuestion1(){
    console.log("answerQuestion 1  was clicked")
    document.getElementById('answer-question1').style.display="none";
     document.getElementById('ask-question2').style.display="";
     document.getElementById('score').style.display="";
   
     let answer = document.getElementById('question1').value;
        
     let correctAnswer = answers[0]
     if(answer===correctAnswer){
        userScore++;
        
         document.getElementById('dialog1').innerHTML="I guess I'll have to give you that one, but you won't be able to answer the next one! Press the continue button when you're ready.";
         document.getElementById('question1').style.display="none"
         yourScore();
      } else {
             document.getElementById('dialog1').innerHTML="Ha! I knew you couldn't do it. You get another chance though. Click continue when you are ready to resume."
             document.getElementById('question1').style.display="none";
             yourScore();
         }
     }
     //ask question2

 function askQuestion2(){
    console.log('askQuestion2 was clicked')
    document.getElementById('fieldset1').style.display="none";
    document.getElementById('fieldset2').style.display="";
    document.getElementById('dialog2').innerHTML="Poor people have it. Rich people need it. If you eat it you die. <br> What is it?"
    document.getElementById('question2').style.display="";
    document.getElementById('ask-question2').style.display="none";
    document.getElementById('answer-question2').style.display="";
 }
// answer question 2

 function answerQuestion2(){
    console.log('answerQuestion2 has been clicked')
     document.getElementById('answer-question2').style.display="none";
     document.getElementById('ask-question3').style.display="";
     
     let answer= document.getElementById('question2').value
     let correctAnswer= answers[1]
     if(answer===correctAnswer){
         userScore++;
         yourScore();
       document.getElementById('question2').style.display="none";
         document.getElementById('dialog2').innerHTML="Oh you think you're smart, don't you? You haven't won yet! Press continue to get your third question."
    } else {
        document.getElementById('question2').style.display="none";
        document.getElementById('dialog2').innerHTML = "I really thought you'd be more of a challenge. You can press continue to get your third question."
    }
}
    //askQuestion3

    function askQuestion3(){
            console.log("askQuestion3 has been clicked")
        document.getElementById('fieldset2').style.display="none";
        document.getElementById('fieldset3').style.display="";
        document.getElementById('dialog3').innerHTML="What belongs to you but other people use it more than you?";
        document.getElementById('question3').style.display="";
        document.getElementById('ask-question3').style.display="none";
        document.getElementById('answer-question3').style.display="";
    }
    //answer question3 
    function answerQuestion3(){
        console.log('answerQuestion3 has been clicked')
        document.getElementById('answer-question3').style.display="none";
        document.getElementById('ask-question4').style.display="";
        
        let answer = document.getElementById('question3').value
        let correctAnswer = answers[2]
        if(answer===correctAnswer){
            userScore++;
            yourScore();
        document.getElementById('question3').style.display="none";
        document.getElementById('dialog3').innerHTML ="You got that question right!!?? You must have cheated! Press continue for your fourth question.";
        } else {
        document.getElementById('question3').style.display="none";
        document.getElementById('dialog3').innerHTML="Pathetic!! I thought you were smart! Press continue to get your fourth question."
        }
    }
    //ask Question 4
    function askQuestion4(){
        console.log('askQuestion4 has been clicked')
        document.getElementById('fieldset3').style.display="none";
        document.getElementById('fieldset4').style.display="";
        document.getElementById('dialog4').innerHTML="It can't be seen, can't be felt, can't be heard, and can't be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life and kills laughter. What is it?";
        document.getElementById('question4').style.display="";
        document.getElementById('ask-question4').style.display="none";
        document.getElementById('answer-question4').style.display="";
    }
    //answer question 4
    function answerQuestion4(){
        console.log("askQuestion4 has been clicked")
        document.getElementById('answer-question4').style.display="none";
        document.getElementById('ask-question5').style.display="";
        
        let answer = document.getElementById('question4').value
        let correctAnswer = answers[3]
        if(answer===correctAnswer){
            userScore++;
            yourScore();
            document.getElementById('question4').style.display="none";
            document.getElementById('dialog4').innerHTML="What are you doing? How did you get that answer correct? One last question. Let's finish this. Press continue to get your last question.";
        } else {
            
            document.getElementById('dialog4').innerHTML="You're really no match for me are you? Well go ahead and press continue to get your last question.";
            document.getElementById('question4').style.display="none";
        }
    }
    //ask Question 5
    
    function askQuestion5(){
        console.log('askQuestion5 has been clicked')
        document.getElementById('fieldset4').style.display="none";
        document.getElementById('fieldset5').style.display="";
        document.getElementById('dialog5').innerHTML="What is the only word in the english language that has 3 sets of doubletters back to back."
        document.getElementById('question5').style.display="";
        document.getElementById('ask-question5').style.display="none";
        document.getElementById('answer-question5').style.display="";
    }
    //answer question 5
    function answerQuestion5(){
        console.log('answerQuestion5 has been clicked')
        document.getElementById('answer-question5').style.display="none";
        document.getElementById('final-dialog').style.display="";
        let answer = document.getElementById('question5').value;
        let correctAnswer = answers[4]
        if(answer===correctAnswer){
            userScore++;
            yourScore();
        document.getElementById('dialog5').innerHTML="You weren't supposed to get the last question right! Press Continue."
        document.getElementById('question5').style.display="none";
        } else {
            document.getElementById('dialog5').innerHTML="Well that last question was pretty hard, for a three year old! HA! Press Continue."
            document.getElementById('question5').style.display="none";
        }
    }
//final win/loss
function final(){
    console.log('final has been clicked')
    document.getElementById('fieldset5').style.display="none";
    document.getElementById('fieldset6').style.display="";
    document.getElementById('final-dialog').style.display="none";
    if(userScore > 2){

        document.getElementById('dialog6').innerHTML="I know you cheated. I don't know how, but I'll figure it out. As for now you may pass if you dare. The challenges on the other side of the bridge are much more difficult.";
        document.getElementById('cross-bridge').style.display="";
    } else {
        document.getElementById('dialog6').innerHTML="You must feel pretty dumb right now, huh? Well go lick your wounds somewhere else, you're not crossing <strong>MY</strong> bridge. But I am a generous troll, so if you want to play again just click the start over button."
        document.getElementById('restart-game').style.display="";
    
    } 
}

  //Cross the bridge 
  function crossBridge() {
    console.log('zoomin has been clicked')
    
    document.getElementById('score').style.display="none";
    document.getElementById('fieldset6').style.display="none";
    document.getElementById('cross-bridge').style.display="none";
    document.getElementById('wolf').style.display="";

}
//start over
function reStart(){
    document.getElementById('fieldset6').style.display="none";
    document.getElementById('restart-game').style.display="none";
    askQuestion1()
    if(userScore > 0){
   userScore = 0
   yourScore()                  
    }
}
