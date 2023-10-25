// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let man = [];
let jump = [];


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(0);
  rectMode(CENTER);
  strokeWeight(6)
  noFill();
  stroke(bass, 100, 100)
  

  var bassMap = map(bass, 0,100, 10, 100);

  for(var ii = 1; ii <= 18; ii++){
    var yStep = ii*50;
  for(var i = 1; i <= 10; i++){
   ellipse(50 * i, yStep, bassMap);
  }

  }
strokeWeight(400)
  ellipse(width/2,height/2,300,300)

if(firstRun){
  rectMode(CENTER);

  jump.push(loadImage('Somersault Man Sequence-22.png'));
  jump.push(loadImage('Somersault Man Sequence-23.png'));
  jump.push(loadImage('Somersault Man Sequence-24.png'));
  jump.push(loadImage('Somersault Man Sequence-25.png'));
  jump.push(loadImage('Somersault Man Sequence-26.png'));
  jump.push(loadImage('Somersault Man Sequence-27.png'));
  jump.push(loadImage('Somersault Man Sequence-28.png'));
  jump.push(loadImage('Somersault Man Sequence-29.png'));
  jump.push(loadImage('Somersault Man Sequence-30.png'));
  jump.push(loadImage('Somersault Man Sequence-31.png'));
  //jump.push(loadImage('Somersault Man Sequence-32.png'));


  firstRun = false
}

var OtherFrame = int(map(bass,10,100,0,6));
push();
image(jump[OtherFrame], width/12, height/3.5)
scale(0.5)
pop();

}

