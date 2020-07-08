
function movedown(){
   console.log("h"+ document.getElementById("car").style.left);
   console.log("sahbi");
   document.getElementById("car").style.left =(parseInt(document.getElementById("car").style.left.replace(/px/,""))+100)+"px" ; 


 
}

function speedup(){
    
   var road = document.getElementById("dv");
   var duration = road.style.animationDuration ; 
  
      console.log(duration);
     duration = "0.5s" 
     var cityduration = "5s"
    
   document.getElementById("dv").style.animationDuration = duration ; 
   document.getElementById("city").style.animationDuration = cityduration ;
   document.getElementById("road1").style.animationDuration  = "0.2s" ;
   document.getElementById("road2").style.animationDuration  = "0.2s" ;
   document.getElementById("fire").style.display = "block"; 
}

function speeddown(){
   var road = document.getElementById("dv");
   var duration = road.style.animationDuration ; 
  
      console.log(duration);
     duration = "10s" 
     var cityduration = "20s"; 
    
   document.getElementById("dv").style.animationDuration = duration ; 
   document.getElementById("city").style.animationDuration = cityduration ; 
   document.getElementById("road1").style.animationDuration  = "2s" ;
   document.getElementById("road2").style.animationDuration  = "2s" ;
   document.getElementById("fire").style.display = "none";
}

function stop(){
   var road = document.getElementById("dv");
   var duration = road.style.animationDuration ; 
  
      console.log(duration);
     duration = "1000s" 
     var cityduration = "2000s"; 
     document.getElementById("bt4").style.display = "block" ; 
     document.getElementById("bt3").style.display = "none" ;  
   document.getElementById("dv").style.animationDuration = duration ; 
   document.getElementById("city").style.animationDuration = cityduration ; 
   document.getElementById("road1").style.animationDuration  = "2000s" ;
   document.getElementById("road2").style.animationDuration  = "2000s" ; 
   document.getElementById("welcom").innerHTML="NEED FOR SPEED LITE";
   document.getElementById("welcom").style.left = "500px" ; 
   document.getElementById("fire").style.display = "none";
}
 
function start(){
   var road = document.getElementById("dv");
   var duration = road.style.animationDuration ; 
  
      console.log(duration);
     duration = "5s" 
     var cityduration = "10s"; 
   document.getElementById("bt4").style.display = "none" ; 
   document.getElementById("bt3").style.display = "block" ; 
   document.getElementById("dv").style.animationDuration = duration ; 
   document.getElementById("city").style.animationDuration = cityduration ; 
   document.getElementById("road1").style.animationDuration  = "1s" ;
   document.getElementById("road2").style.animationDuration  = "1s";
   document.getElementById("welcom").innerHTML="play" ; 
   document.getElementById("welcom").style.left = "700px" ; 
} 

function moveup(){
   var littleBox = document.getElementById("fire");
   var lbStyle = window.getComputedStyle(littleBox);
   var topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) - 20) + "px";

    littleBox = document.getElementById("car");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) - 20) + "px";

    littleBox = document.getElementById("road1");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) - 20) + "px";

   littleBox = document.getElementById("road2");
   lbStyle = window.getComputedStyle(littleBox);
   topValue = lbStyle.getPropertyValue("top").replace("px", "");
  littleBox.style.top = (Number(topValue) - 20) + "px";
}

function movedown(){
   var littleBox = document.getElementById("fire");
   var lbStyle = window.getComputedStyle(littleBox);
   var topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) + 20) + "px";

    littleBox = document.getElementById("car");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) + 20) + "px";

    littleBox = document.getElementById("road1");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("top").replace("px", "");
   littleBox.style.top = (Number(topValue) + 20) + "px";

   littleBox = document.getElementById("road2");
   lbStyle = window.getComputedStyle(littleBox);
   topValue = lbStyle.getPropertyValue("top").replace("px", "");
  littleBox.style.top = (Number(topValue) + 20) + "px";
}

function moveleft(){
   var littleBox = document.getElementById("fire");
   var lbStyle = window.getComputedStyle(littleBox);
   var topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue) -20) + "px";

    littleBox = document.getElementById("car");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue)  -20) + "px";

    littleBox = document.getElementById("road1");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue) - 20) + "px";

   littleBox = document.getElementById("road2");
   lbStyle = window.getComputedStyle(littleBox);
   topValue = lbStyle.getPropertyValue("left").replace("px", "");
  littleBox.style.left = (Number(topValue) - 20) + "px";
}

function moveright(){
   var littleBox = document.getElementById("fire");
   var lbStyle = window.getComputedStyle(littleBox);
   var topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue)+20) + "px";

    littleBox = document.getElementById("car");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue) +20) + "px";

    littleBox = document.getElementById("road1");
    lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue("left").replace("px", "");
   littleBox.style.left = (Number(topValue)+ 20) + "px";

   littleBox = document.getElementById("road2");
   lbStyle = window.getComputedStyle(littleBox);
   topValue = lbStyle.getPropertyValue("left").replace("px", "");
  littleBox.style.left = (Number(topValue) +20) + "px";
}