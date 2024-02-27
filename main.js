song1 = "";
song2 = "";
leftWristX = "0";
leftWristY = "0";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(650, 200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}