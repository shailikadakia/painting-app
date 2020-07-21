// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSB, noStroke, color, fill,
   ellipse, text, line, stroke, width, mouseX, mouseY, height */

// We'll use variables for most of our colors in this code-along.

 var  color1, color2, color3, color4;

function setup(){
  createCanvas(400, 400);
  button8= createButton ('Clear');
  button8.position = (350, 50);
  button8.mousePressed(reset);
	reset();
}

function draw() {
 
  if(mouseIsPressed ==true ) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  push ();
  noStroke ();
  fill (color1);
  rect (0, 0, 40, 40);
  fill (color2);
  rect (50,0, 40,40);
  fill(color3);
  rect (100, 0, 40, 40);
  fill(color4);
  rect (150, 0, 40, 40);
  fill (color5) 
  rect (200, 0, 40, 40);
  fill (color6)
  rect (250, 0, 40, 40);
  fill (color7);
  rect (300, 0, 40, 40); 
  pop ();
  
}

function change1() {
 stroke (color1);
}
function change2() {
 stroke (color2);
}
function change3() {
 stroke (color3);
}
function change4() {
 stroke (color4);
}
function change5() {
 stroke (color5);
}
function change6() {
 stroke (color6);
}
function change7() {
 stroke (color7);
}
function reset() {
 createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
	background(100);
    color1 = color(0, 47, 94);
    color2= color (60, 47, 94);
    color3 = color (180, 47, 94);
    color4 = color (240, 47, 94);
    color5 =  color (30, 47, 94);
    color6 = color (0, 0, 72); 
    color7 = color (10);
	strokeWeight(2);
 
	stroke(10);
  
  
  button1 = createButton('Pink');
  button1.position(75, 50);
  button1.mousePressed(change1);
  
  button2 = createButton('Yellow');
  button2.position(125, 50);
  button2.mousePressed(change2);
  
  button3 = createButton('Blue');
  button3.position(175, 50);
  button3.mousePressed(change3);

  
  button4 = createButton('Purple');
  button4.position(225, 50);
  button4.mousePressed(change4);
  
  button5 = createButton('Tan');
  button5.position(275, 50);
  button5.mousePressed(change5);
  
  button6 = createButton('Grey');
  button6.position(325, 50);
  button6.mousePressed(change6);
  
  button7 = createButton('Black');
  button7.position(375, 50);
  button7.mousePressed(change7);
  

}



