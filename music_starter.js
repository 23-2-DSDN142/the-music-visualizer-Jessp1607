
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(26, 15, 15)

  var ballSize = map(50, 0,100, 40, 150);

  var drumHeight = map(drum, -200,400, height, 0*ballSize/2);

  fill(242, 187, 48);
  ellipse(width/2, drumHeight, ballSize);
  fill(209, 109, 209);
  ellipse(width/2, drumHeight-140, 70);

  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
/** 
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   */
}