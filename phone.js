status = "";
img = "";

function preload() {
    img = loadImage("phone.jpeg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    status = true;
    objectDetect.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else
        console.log(results);
}
