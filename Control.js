let mobilenet;
let classifier;
let video;
let label = 'loading model';
let happyButton;
let sadButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  canvas2 = createCanvas(600, 500);
  canvas2.position(600,0);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  happyButton = createButton('happy');
  //position.happyButton(600, 550);
  happyButton.mousePressed(function() {
    classifier.addImage('happy');
  });

  sadButton = createButton('sad');
  sadButton.mousePressed(function() {
    classifier.addImage('sad');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function draw(){
  background(154, 187, 192);
}




var startedPlaying = false;
var playPosition = false;
var endPosition = false;
if(mazeNumber == 1){
  var activeMaze = true;
}
p5.disableFriendlyErrors = true

for (var i = 0; i < grid.length; i++){
  grid[i].show();
}

playPosition.playPosition = true;
endPosition.endPosition = true;

