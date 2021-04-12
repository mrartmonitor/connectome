let countUp = 0;

/*Räkna antalet klick
function buttonCount() {}
*/

/*
const folder = document.getElementById('b2');
folder.addEventListener('dblclick', function (e) => {
document.querySelector('.enterfolder').style = 'block'

});
*/

   //IMG PREVIEW ---------

const cards = document.querySelectorAll('.image');

for ( let card of cards) {
  card.addEventListener('dblclick', imageClicker);
}

function imageClicker(){
  document.querySelector('.preview img').src = this.src;
  document.body.classList.add('show-preview');
}

const preview = document.querySelector('#preview');

preview.addEventListener('dblclick', closePreview);
preview.addEventListener('click', closePreview);


function closePreview(){
  document.body.classList.remove('show-preview');
}
    //FOLDER ----------------


const randomFolderOrder = document.getElementsByClassName('iframed');


for ( let randomness of randomFolderOrder) {
  randomness.style.left = "40 " + (18*Math.random()) + "% ";
  console.log("random");

};


//Öppna iframe -----------------


document.addEventListener('DOMContentLoaded', function() {

  const desktopButtons = document.getElementsByClassName("desktop-icon");
  console.log("test", desktopButtons);
});


function findButtonWindow(button) {
    if (!button) return;
    let id = button.id;

    for (let element of document.getElementsByClassName("desktop-window")) {
      if (element.id === id) {
        return element;
      }
    }
    throw `${id} does not have a matching window`;
}
  console.log("hello");

const desktopButtons = document.getElementsByClassName("desktop-icon");
for (let i = 0; i < desktopButtons.length; i++) {
    console.log("hi hellow")
   let desktopButton = desktopButtons[i];
   desktopButton.addEventListener("dblclick", function() {
     let desktopWindow = findButtonWindow(desktopButton);
     if (desktopWindow.classList.contains("is-open")){
          desktopWindow.classList.remove("is-open");
                 desktopWindow.style.top = (300*Math.random()) + "%";
     } else {
       desktopWindow.classList.add("is-open");

     }
   });
 }

;
    //Stäng i-frame ---------


const closeFolder = document.getElementsByClassName("closeButton");
for ( let loopFolder of closeFolder) {

  loopFolder.addEventListener('click', function() {

  let buttonerz = document.getElementsByClassName("is-open");
console.log("hesus");
    for (repeatbutton of buttonerz) {
      repeatbutton.classList.remove("is-open");

      }

});
}

//-----PlayGIFRemidners -------->>>

var trashcaniconstart = true;

const mouseTarget = document.getElementById('remindersid');

mouseTarget.addEventListener('mouseover', e => {
  mouseTarget.src = "assets/images/UI/todoicongif2.gif";

});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.src = "assets/images/UI/todoicon.png";

});


const mouseTargetTrash = document.getElementById('trashcan');

mouseTargetTrash.addEventListener('mouseover', e => {
  if (trashcaniconstart === true) {
  mouseTargetTrash.src = "assets/images/UI/testtrash.gif";
}
});

mouseTargetTrash.addEventListener('mouseleave', e => {
  if (trashcaniconstart === true) {
    mouseTargetTrash.src = "assets/images/UI/trash.png";
    console.log("true");
  }
  else {
      mouseTargetTrash.src = "assets/images/UI/trashempty.png";
  }



});

//----  EMPTY trash------->>>>

const emptyTrash = document.getElementById('emptytrashid');

const removethis = document.getElementById('everythinInsideTrash');

const trashagain = document.getElementsByClassName('trashinside');


emptyTrash.addEventListener('click', e => {
  removeAllChildNodes(removethis);
  function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
          emptyTrash.remove();
          mouseTargetTrash.src = "assets/images/UI/trashempty.png";
          trashcaniconstart = !trashcaniconstart;
          console.log("false");
}}});

// ---- next function ---->
