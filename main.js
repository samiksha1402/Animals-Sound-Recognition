function start()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zk7TKkqpM/model.json', modelReady);
}
function modelReady(){
    console.log("modelReady");
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("confidence").innerHTML="Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("label").style.color= "rgb("+ r + ", " + g +", "+ b +")";
        document.getElementById("confidence").style.color= "rgb("+ r + ", " + g +", "+ b +")";

        img1= document.getElementById("hearing");
        if (results[0].label == "meow" ){
            img1.src = "cat.gif"
        } 
        else if (results[0].label == "bark") {
            img1.src = "dog.gif"; 
        }
        else if (results[0].label == "roar"){
            img1.src = "tiger.gif";
        }
        else{
            img1.src = "talking.gif";
        }
    
   }
}

