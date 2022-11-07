var modal="";

function setup()
{
    video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(600, 100);
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("model_status").innerHTML="status = detecting object";
    object = document.getElementById("input");
}

function modelLoaded()
{
    console.log("model is loaded");

}

function draw()
{
    image(video, 0, 0, 550, 500);
}