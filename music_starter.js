// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colourMode(HSB, 100);
  background(255);
  rectMode(CENTER);
  strokeWeight(9)
  stroke(drum, 88, 88)

  var drumMap = map(drum, 0,100, 30, 90);
  var lengthOfLine = 300;
  var LineStart = 100;
  var lineEnd = LineStart+lengthOfLine;
  line(LineStart, 300, lineEnd, 300);

  
  
  
  
  
   //if(bass < 20){
  // background(20)}
  // else{
   //  background(200)
 
   } 
