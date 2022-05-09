function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound('jump.wav');
	mario_coin = loadSound('coin.wav');
	mario_gameover = loadSound('gameover.wav');
	mario_kick = loadSound('kick.wav');
	mariodei = loadSound('mariodei.wav');

}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_consol');

	PoseNet = ml5.poseNet(video, modelLoaded);
	PoseNet.on('pose', gotresult);
	instializeInSetup(mario);
}

function modelLoaded() {
	console.log('The posenet model is loaded...');
}

function gotresult(error, results) {
	if (error) {
		console.log(error);
	} else {
		if(results.length>0){
			console.log(results);
			noseX = results[0].pose.nose.x;
			noseY = results[0].pose.nose.y;
		}
	}
}

function draw() {
	game();
}