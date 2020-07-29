/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

var fullItemList= document.getElementById("my-list");

if(fullItemList) {
fullItemList.addEventListener("click",checkOffItem);
}
function checkOffItem(clicked){
  if (clicked.target.tagName="LI") {
    clicked.target.classList.toggle("all-done")
  }
}


/* button from home to take action*/
var hometoaction = document.getElementById("hometoaction");
hometoaction.addEventListener("click", changepage);
function changepage(){
  window.location.replace("https://activist-toolkit-kzfaml.glitch.me/take-action.html");
}

