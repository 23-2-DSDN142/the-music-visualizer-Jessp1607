// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(255);
  rectMode(CENTER);
  strokeWeight(9)
  stroke(drum, 88, 88)

  var drumMap = map(drum, 0,100, 30, 90);
  var lengthOfLine = 300;
  var LineStart = 100;
  var lineEnd = LineStart+lengthOfLine;


  for(var i = 1; i < drumMap; i++){
   let lineStep = i*10 
   line(LineStart, lineStep, lineEnd, lineStep);
   
  }


   //if(bass < 20){
  // background(20)}
  // else{
   //  background(200)
 
   } 
