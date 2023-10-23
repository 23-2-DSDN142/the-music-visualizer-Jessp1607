// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(0);
  rectMode(CENTER);
  strokeWeight(9)
  noFill();
  stroke(drum, 88, 88)

  var drumMap = map(drum, 0,100, 30, 90);

  for(var i = 1; i < drumMap; i++){
   let ellipseStep = i*10 
   ellipse(width/2, ellipseStep, height/2, ellipseStep);
   

  }


   //if(bass < 20){
  // background(20)}
  // else{
   //  background(200)
 
   } 
