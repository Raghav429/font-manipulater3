leftWrist = 0;
rightWrist = 0;
difference = 0;
function setup()
{
    video= createCapture(VIDEO);
    video.size(400, 400);
    video.position(100,100)
    
canvas= createCanvas(400, 400);
canvas.position(500, 100);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded()
{
    console.log('PoseNet is Loaded');
}
function gotPoses(results)
{
    console.log(results);
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = floor(leftWrist- rightWrist ); 
}
function draw()
{
background("#ADD8E6");
fill("#00FF00");
textSize(difference);
text('Raghav',50, 400)
}