function check(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
var correct=0;
if(question1=="Muhammad Ali Jinnah"){
    correct++
}
 if(question2=="Allama Iqbal"){
    correct++

}
if(question3==" jasmine"){
    correct++

}
 if(question4=="Markhor"){
    correct++

}
if(question5=="Five"){
    correct++

}
var message =["Weldone!","That's just okay", "You really need to do better"];
var pics=["success.gif","ok.gif","fall.gif"]
var range;
if(correct<1){
    range=2;
}
if(correct > 0 && correct < 5){
    range=1;
}
if(correct >3){
    range=0;
}
document.getElementById("message").innerHTML=message[range];

document.getElementById("pictures").src=pics[range]
alert(message[range])
document.getElementById("after_submit").style.visibility="visible";
document.getElementById("number_correct").innerHTML="you got "+ correct
+ " correct";
}
