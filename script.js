

let NextPage = function(){

  radio1 = document.getElementById("FirstOp1");
  radio2 = document.getElementById("FirstOp2");
  radio3 = document.getElementById("FirstOp3");
  radio4 = document.getElementById("FirstOp4");
  
   if(radio1.checked){

    document.getElementById("output").innerHTML= "You have a caked donut. What frosting?"

    document.getElementById("Op1").innerHTML= "";
  document.getElementById("Op2").innerHTML="";
  document.getElementById("Op3").innerHTML= "";
  document.getElementById("Op4").innerHTML="";

    document.getElementById("CB1").innerHTML= "Strawberry";
    document.getElementById("CB2").innerHTML="Vanilla.";
    document.getElementById("CB3").innerHTML= "Milk Coco.";
    document.getElementById("CB4").innerHTML="Penut Butter.";
   }
  
  else if(radio2.checked){
    document.getElementById("output").innerHTML = "Nope."  

    alert("Please retart program.");
  }
  else if(radio3.checked){
    document.getElementById("output").innerHTML= "You have a glazed donut. What frosting?"

    document.getElementById("Op1").innerHTML= "";
  document.getElementById("Op2").innerHTML="";
  document.getElementById("Op3").innerHTML= "";
  document.getElementById("Op4").innerHTML="";

    document.getElementById("CB1").innerHTML= "Go light path.";
    document.getElementById("CB2").innerHTML="Go Dark.";
    document.getElementById("CB3").innerHTML= "Throw scrap down hall.";
    document.getElementById("CB4").innerHTML="yell down hall.";

    
    
  }
  else if(radio4.checked){
    document.getElementById("output").innerHTML = "Nada."
    alert("Please retart program.");
  }
  else{
    document.getElementById("output").innerHTML = "YOU HAVE FAILED THE VIBE CHECK"
  }
}


///////////////////////////////////
let bruh = function(){

  checkBox1 = document.getElementById("checkClass1");
  checkBox2 = document.getElementById("checkClass2");
  checkBox3 = document.getElementById("checkClass3");
  checkBox4 = document.getElementById("checkClass4");

  if(checkBox1.checked){
    document.getElementById("output").innerHTML= "Strawberry? Really?. FAIL!" 
    alert("Please retart program.");
}
if(checkBox2.checked){
    document.getElementById("output").innerHTML= "Vanilla? Okay Nice! Now name it!" 

    document.getElementById("CB1").innerHTML= "";
    document.getElementById("CB2").innerHTML="";
    document.getElementById("CB3").innerHTML= "";
    document.getElementById("CB4").innerHTML="";

    document.getElementById("TB1").innerHTML= "Op 1.";
    document.getElementById("TB2").innerHTML="Op 2.";
    document.getElementById("TB3").innerHTML= "Op 3.";
    document.getElementById("TB4").innerHTML="Op 4.";
}
if(checkBox3.checked){
    document.getElementById("output").innerHTML= "Milk Coco? Okay Nice!. Now name it!" 

    document.getElementById("CB1").innerHTML= "";
    document.getElementById("CB2").innerHTML="";
    document.getElementById("CB3").innerHTML= "";
    document.getElementById("CB4").innerHTML="";

    document.getElementById("TB1").innerHTML= "Op 1.";
    document.getElementById("TB2").innerHTML="Op 2.";
    document.getElementById("TB3").innerHTML= "Op 3.";
    document.getElementById("TB4").innerHTML="Op 4.";

}
if(checkBox4.checked){
    document.getElementById("output").innerHTML= "I like penut butter, but not like this. FAIL!" 
    alert("Please retart program.");
}


}


///////////////////////////////
let FinalAct = function(){ 

  let text1 = document.getElementById("answer1").value;
  let text2 = document.getElementById("answer2").value;
  let text3 = document.getElementById("answer3").value;
  let text4 = document.getElementById("answer4").value;

  document.getElementById("output").innerHTML= text1 + " " + text2 + " " + text3 + " " + text4 
  
}

  


 