
const defaultBtn = document.querySelector("#default");
const fileName = document.querySelector("#file-name");
const customBtn = document.querySelector("#custom");
const cancelBtn = document.querySelector("#cancel");
const img = document.querySelector("#preview");
const progress = document.querySelector(".progress-container");
const uploadBtn = document.querySelector("#upload");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive(){
    defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            img.classList.add("active");
        }
        cancelBtn.addEventListener("click", function(){
            img.src = "images/camera.png"
            img.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});

function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 50);
    progress.classList.add("active");
    function frame() {
   if (width >= 100) {
    clearInterval(id);
    document.getElementById("myP").className = "w3-text-green w3-animate-opacity";
    document.getElementById("myP").innerHTML = "Successfully uploaded your video!";
  } else {
    width++; 
    elem.style.width = width + '%'; 
    var num = width * 100 / 100;
    num = num.toFixed(0)
    document.getElementById("demo").innerHTML = num;
  }
}
}


