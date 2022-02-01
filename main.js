

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qEFbSJkb7/model.json', modelReady);
}

modelReady()
{
    classifier.classify(gotResults);
}
