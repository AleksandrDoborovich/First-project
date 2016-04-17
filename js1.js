var myGoal;
var enterGoal;
var mainEl;
var newEl;

//
myGoal=document.getElementById("inputForm");
myGoal.addEventListener("keydown", WriteGoal, false);
function WriteGoal (){};


enterGoal=document.getElementById("enterNewGoal");
enterGoal.addEventListener("click", AddToPage, false);


mainEl=document.getElementById("mainElement");
function AddToPage (){

newEl=document.createTextNode(myGoal.value);
mainEl.appendChild(newEl)

};





