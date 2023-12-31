Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

caches,era = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" scr="'+data_uri+'"/>"';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RlzytX9xd/', modelLoaded);
