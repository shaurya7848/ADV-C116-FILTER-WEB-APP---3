lipx = 0;
lipy = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/yxktZKMw/mustache.png');
}

function draw()
{
image(video,0,0,300,300);
image(mustache,lipx-15,lipy,40,40);
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('posenet is intialized');
}

function gotPoses(results)
{
if(results.length > 0 )
{
console.log(results);
lipx = results[0].pose.nose.x;
lipy = results[0].pose.nose.y;
console.log("lip x = " + results[0].pose.nose.x);
console.log("lip y = " + results[0].pose.nose.y);
}
}

function take_snapshot()
{
    save("filteredimage.png");
}