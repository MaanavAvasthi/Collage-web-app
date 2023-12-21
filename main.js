var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript.toLowercase;
    console.log(Content);
    if(Content=="selfie"){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your next selfie in five seconds "
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera); 
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");