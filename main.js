
 //-------------------------------INICIO DE LA CLASE 139----------------------------------------

 function preload() {

	// ------------------- SE AGREGA EL SONIDO HASTA LA C143-------------------
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	

    //-------Código proporcionado EN LA C139---------
	//---- SE EXPLICA HASTA LA CLASE 142----- SOLO SUENA ESTO AL DAR CLIC EN JUGAR
    world_start = loadSound("world_start.wav");
	// funciones que cargan los elementos y animaciones del juego. Ya esta hecha por Linuk
	setSprites();
	MarioAnimation();
    //-------------------------------------
}

function setup() {

     //-------Código proporcionado ---------
	canvas = createCanvas(1240,336);
    //carga las variables y funciones que hacen funcionar al juego. Ya esta hecha por Linuk
    instializeInSetup(mario);
    //-------------------------------------


	canvas.parent('lienzo');

	//-------------------------------INICIO DE LA CLASE 141----------------------------------------


	video = createCapture(VIDEO);
	video.size(800,400);
	//ponemos la camara sobre el div vacio
	video.parent('camara_en_consola');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('¡Modelo cargado!');
  }

  function gotPoses(results)
  {
	  console.log(results);
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
  //-------Código proporcionado ---------
function draw() {
	game();
}