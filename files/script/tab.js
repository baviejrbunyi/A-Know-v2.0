 var tabButtons = document.querySelectorAll(".tab-container .button-container button");
 var tabPanels = document.querySelectorAll(".tab-panel");

 function showPanel(panelIndex, colorCode) {
     
     tabButtons.forEach(function(node) {
        node.style.backgroundColor="";
        node.style.color="";
     });
     
     tabButtons[panelIndex].style.backgroundColor=colorCode;
     tabButtons[panelIndex].style.color="white";

     tabPanels.forEach(function(node){
        node.style.display="none";
     });
     tabPanels[panelIndex].style.display="block";
 }
 showPanel(0, '#001da0');