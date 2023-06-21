/* VARIABLES */
const hero = document.getElementsByClassName('hero')[0];
const header = document.getElementsByTagName('header')[0];
const draw_frame = document.getElementById('draw-frame');
var context = draw_frame.getContext('2d');
let initialX;
let initialY;

/* CANVAS BEHAVIOR */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const colors = ["#42BFDD", "#deb887"];
const color = colors[getRandomInt(colors.length)];

const dibujar = (cursorX, cursorY, color) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 20;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY, color);
  draw_frame.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY, color);
};

const mouseUp = () => {
  draw_frame.removeEventListener("mousemove", mouseMoving);
};

draw_frame.addEventListener("mousedown", mouseDown);
draw_frame.addEventListener("mouseup", mouseUp);

/* SUBSECTION BUILDER */

const subsections = document.getElementsByClassName('subsection');

for (let section of subsections) {
    section.style.width = "100%";
}
let height = parseInt(subsections[0].offsetWidth / 1.1);
for (let section of subsections) {
    section.style.height = `${height}px`;
}

/* FIX HERO HEIGHT AND CANVAS SIZE*/
hero.style.height = `calc(100vh - ${header.offsetHeight}px)`;
draw_frame.setAttribute("width", `${hero.offsetWidth}`);
draw_frame.setAttribute("height", `${hero.offsetHeight}`);
onresize = (event) => {
    draw_frame.setAttribute("width", `${hero.offsetWidth}`);
    draw_frame.setAttribute("height", `${hero.offsetHeight}`);
    console.log("resized");
};

/* CENTERED QUOTED TEXT ANIMATION */
const texts = document.getElementsByClassName('invert-animation');
const invert_filter = document.getElementsByClassName('');