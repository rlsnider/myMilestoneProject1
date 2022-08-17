//set arrays for functions to read

let answers=["SHADOW", "NOTHING", "YOUR NAME", "THE DARK", "BOOKKEEPER"]

let userAnswer=[];

let userScore = 0;

//set all buttons ivisible except for start button.

document.getEleementById('continue1').style.display="";
document.getEleementById('submit1').style.display="";
document.getEleementById('continue2').style.display="";
document.getEleementById('submit2').style.display="";
document.getEleementById('continue3').style.display="";
document.getEleementById('submit3').style.display="";
document.getEleementById('continue4').style.display="";
document.getEleementById('submit4').style.display="";
document.getEleementById('continue5').style.display="";
document.getEleementById('submit5').style.display="";
document.getEleementById('continue6').style.display="";

//set all questions to invisible.

document.getElementById('question1').style.display="none";
document.getElementById('question2').style.display="none";
document.getElementById('question3').style.display="none";
document.getElementById('question4').style.display="none";
document.getElementById('question5').style.display="none";

//set UserScore 

//add one to score if answer is correct, 0 if answer is wrong; 
//Store score in var; displays score on page.

function yourScore(){
    document.getElementById('score').innerHTML=`Your score is ${userScore}`

}
//hides display dialog so new dialog can go into paragraph.
function hide(){
    document.getElementById('dialog1').innerHTML="";

}

function final(){
    hide();
    if(userScore > 2){
        document.getElementById('dialog1').innerHTML="I know you cheated. I don't know how, but I'll figure it out. As for now you may pass if you dare. The challenges on the other side of the bridge are much more difficult.";
    } else{
        hide();
        document.getElementById('dialog1').innerHTML="You must feel pretty dumb right now, huh? Well go like your wounds somewhere else, your're not crossing <strong>MY</strong> bridge."
    }
}
//functions for uncovering and covering buttons and statements

function statement1(){
    document.getElementById('continue1').style.display="none";
    document.getElementById('submit1').style.display="";
    document.getElementById('startup').style.display="none";
    document.getElementById('dialog1').innerHTML="Only one color, but not one size,<br> stuck at the bottom, yet easily flies.<br> Present in sun, but not in rain,<br> doing no harm and feeling no pain.<br> What am I?";
    document.getElementById('question1').style.display="";
}
//waits for onclick from button, then runs statement 2
//turn off display of continue1, onpen up submit2 turn of dialog1
//creates new object from userAnswer add(push) answer to array, set Answer to strin with JSON.
//compare userinput to 0 in answer array, if match, turn on dialog2, turn off button 2 open up button 3.

function statement2(){
    document.getElementById('continue1').style.display="none";
    document.getElementById('submit1').style.display="";
    hide();
    let answer = document.getElementById('question1').value;
    let correctAnswer = answers[0]
    if(answer===correctAnswer){
        userScore++;
        document.getElementById('question1').style.display="none";
        document.getElementById('dialog1').innerHTML="I guess I'll have to give you that one, but you won't be able to answer the next one! Press the continue button when you're ready.";
        document.getElementById('submit1').style.dispaly="none";
        document.getElementById('continue2').style.display="";
        yourScore();
     } else {
            hide();
            document.getElementById('question1').style.display="none";
            document.getElementById('submit1').style.display="none";
            document.getElementById('continue2').style.dispaly="";
            document.getElementById('dialog1').innerHTML="Ha! I know you couldn't do it. You get another chance though. Click continue when you are ready to resume."
            yourScore();
        }
    }
//Statement 3 runs when button continue2 is clicked

function statement3(){
    document.getElementById('continue2').style.display="none";
    document.getElementById('submit2').style.display="";
    hide();
    document.getElementById('dialog1').innerHTML="Poor people have it. Rich people need it. If you eat it you die. <br> What is it?"
    document.getElementById('question2').style.display="";

}
//waits for answer from question 2, then runs statement 4

function statement4(){
    document.getElementById('submit2').style.display="none";
    document.getElementById('continue3').style.display="";
    hide();
    let answer= document.getElementById('question2').value
    let correctAnswer= answers[1]
    if(answer===correctAnswer){
        userScore++;
        yourScore();
    
        document.getElementById('question2').style.display="none";
        document.getElementById('dialog1').innerHTML="Oh you think you're smart, don't you? You haven't won yet! Press continue to get your third question."
    } else {
        document.getElementById('question2').style.display="none";
        document.getElementById('dialog1').inner.HTML = "I really thought you'd be more of a challenge. You can press continue to get your third question."
    }
}
   //waits for user to press continue3 button then runs statement5

   function statement5(){
    

   }