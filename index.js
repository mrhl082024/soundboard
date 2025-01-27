const container = document.querySelector("#container");

const audioArray = ["/home/laheromi/Desktop/vscode/javascript/soundboard/sounds/Rick Rolled (Short Version).mp3", "/home/laheromi/Desktop/vscode/javascript/soundboard/sounds/Epic Sax Guy - Short [osesvfxYZy0].mp3"]

function createSoundBtn(){
    for (let i = 0; i < audioArray.length; i++) {
        const title = createElement("p")
        const playBtn =document.createElement("button");
        const pauseBtn = document.createElement("button");
        title.textContent = "Sound";
        playBtn.src = i;
        pauseBtn.src = i;
        playBtn.addEventListener(playSound());
        pauseBtn.addEventListener(pauseSound());
    }
}

function playSound(){
   play();
}

function pauseSound(){
    pause();
}