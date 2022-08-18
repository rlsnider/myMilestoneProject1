//set arrays for functions to read

let answers=["SHADOW", "NOTHING", "YOUR NAME", "THE DARK", "BOOKKEEPER"]



//set all buttons ivisible except for start button.

document.getElementById('continue1').style.display="";
document.getElementById('submit1').style.display="none";
document.getElementById('continue2').style.display="none";
document.getElementById('submit2').style.display="none";
document.getElementById('continue3').style.display="none";
document.getElementById('submit3').style.display="none";
document.getElementById('continue4').style.display="none";
document.getElementById('submit4').style.display="none";
document.getElementById('continue5').style.display="none";
document.getElementById('submit5').style.display="none";
document.getElementById('continue6').style.display="none";
document.getElementById('continue7').style.display="none";


//These are the fieldset containers
document.getElementById('fieldset1').style.display="none"
document.getElementById('fieldset2').style.display="none"
document.getElementById('fieldset3').style.display="none"
document.getElementById('fieldset4').style.display="none"
document.getElementById('fieldset5').style.display="none"
document.getElementById('fieldset6').style.display="none"
//set UserScore 

//add one to score if answer is correct, 0 if answer is wrong; 
//Store score in var; displays score on page.

function yourScore(){
    document.getElementById('score').innerHTML=`Your score is ${userScore}`

}
//hides display dialog so new dialog can go into paragraph.
// function hide(){
//     document.getElementsByClassName('dialog').innerHTML="";

// }


//functions for uncovering and covering buttons and statements

function statement1(){
    console.log("continue 1 was clicked")
    document.getElementById('continue1').style.display="none";
    document.getElementById('submit1').style.display="";
    document.getElementById('startup').style.display="none";
    document.getElementById('fieldset1').style.display="";
    document.getElementById('dialog1').innerHTML="Only one color, but not one size,<br> stuck at the bottom, yet easily flies.<br> Present in sun, but not in rain,<br> doing no harm and feeling no pain.<br> What am I?";
   
}
let userScore = 0;
//waits for onclick from button, then runs statement 2
//turn off display of continue1, open up submit2 turn of dialog1
//compare userinput to 0 in answer array, if match, print dialog, turn off button 2 open up button 3.

 function statement2(){
    console.log("statement 2 was clicked")
    document.getElementById('submit1').style.display="none";
     document.getElementById('continue2').style.display="";
    
     let answer = document.getElementById('question1').value;
    
     let correctAnswer = answers[0]
     if(answer===correctAnswer){
        userScore++;
        
         document.getElementById('dialog1').innerHTML="I guess I'll have to give you that one, but you won't be able to answer the next one! Press the continue button when you're ready.";
         document.getElementById('question1').style.display="none"
         yourScore();
      } else {
             document.getElementById('submit1').style.display="none";
             document.getElementById('continue2').style.dispaly="";
             document.getElementById('dialog1').innerHTML="Ha! I knew you couldn't do it. You get another chance though. Click continue when you are ready to resume."
             document.getElementById('question1').style.display="none";
             yourScore();
         }
     }
//Statement 3 runs when button continue2 is clicked

 function statement3(){
    console.log('statement 3 was clicked')
    document.getElementById('fieldset1').style.display="none";
    document.getElementById('fieldset2').style.display="";
    document.getElementById('dialog2').innerHTML="Poor people have it. Rich people need it. If you eat it you die. <br> What is it?"
    document.getElementById('question2').style.display="";
    document.getElementById('continue2').style.display="none";
    document.getElementById('submit2').style.display="";
 }
// //waits for answer from submit/question2, then runs statement 4

 function statement4(){
    console.log('statement 4 has been clicked')
     document.getElementById('submit2').style.display="none";
     document.getElementById('continue3').style.display="";
     
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
    //waits for user to press continue3 button then runs statement5

    function statement5(){
            console.log("function 5 has been clicked")
        document.getElementById('fieldset2').style.display="none";
        document.getElementById('fieldset3').style.display="";
        document.getElementById('dialog3').innerHTML="What belongs to you but other people use it more than you?";
        document.getElementById('question3').style.display="";
        document.getElementById('continue3').style.display="none";
        document.getElementById('submit3').style.display="";
    }
    //submit 3 starts starts statement6
    function statement6(){
        console.log('statement 6 has been clicked')
        document.getElementById('submit3').style.display="none";
        document.getElementById('continue4').style.display="";
        
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
    //continue 4 starts statement7
    function statement7(){
        console.log('statement 7 has been clicked')
        document.getElementById('fieldset3').style.display="none";
        document.getElementById('fieldset4').style.display="";
        document.getElementById('dialog4').innerHTML="It can't be seen, can't be felt, can't be heard, and can't be smelt. It lies behind stars and under hills, and empty holes it fills. It comes first and follows after, ends life and kills laughter. What is it?";
        document.getElementById('question4').style.display="";
        document.getElementById('continue4').style.display="none";
        document.getElementById('submit4').style.display="";
    }
    //submit4 calls function8
    function statement8(){
        console.log("statement8 has been clicked")
        document.getElementById('submit4').style.display="none";
        document.getElementById('continue5').style.display="";
        
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
    //Question 5
    //contiue5 calls function statement9
    function statement9(){
        console.log('statement9 has been clicked')
        document.getElementById('fieldset4').style.display="none";
        document.getElementById('fieldset5').style.display="";
        document.getElementById('dialog5').innerHTML="What is the only word in the english language that has 3 sets of doubletters back to back."
        document.getElementById('question5').style.display="";
        document.getElementById('continue5').style.display="none";
        document.getElementById('submit5').style.display="";
    }
    //submit5 calls function10
    function statement10(){
        console.log('statement10 has been clicked')
        document.getElementById('submit5').style.display="none";
        document.getElementById('continue6').style.display="";
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
//continue6 calls function11
function statement11(){
    console.log('statement11 has been clicked')
    document.getElementById('fieldset5').style.display="none";
    document.getElementById('fieldset6').style.display="";
    document.getElementById('continue6').style.display="none";
    if(userScore > 2){

        document.getElementById('dialog6').innerHTML="I know you cheated. I don't know how, but I'll figure it out. As for now you may pass if you dare. The challenges on the other side of the bridge are much more difficult.";
    } else {
        document.getElementById('dialog6').innerHTML="You must feel pretty dumb right now, huh? Well go lick your wounds somewhere else, you're not crossing <strong>MY</strong> bridge. But I am a generous troll, so if you want to play again just click the start over button."
    document.getElementById('continue7').style.display="";
    
    }
}
//start over
function restart(){
    document.getElementById('fieldset6').style.display="none";
    document.getElementById('continue7').style.display="none";
    statement1()
    if(userScore > 0){
   userScore = 0
   yourScore()
    }
}
