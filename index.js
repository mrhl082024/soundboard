const container = document.querySelector("#container");

const audioArray = ["/home/laheromi/Desktop/vscode/javascript/soundboard/sounds/Rick Rolled (Short Version).mp3", "/home/laheromi/Desktop/vscode/javascript/soundboard/sounds/Epic Sax Guy - Short [osesvfxYZy0].mp3"]

function createSoundBtn(){
    for (let i = 0; i < audioArray.length; i++) {
        const soundCard = document.createElement("div");
        soundCard.id = "sound-card";
        const title = document.createElement("p")
        title.textContent = "Sound";
        title.id = "title";
        const playBtn =document.createElement("button");
        playBtn.src = i;
        playBtn.id = "play-btn";
        playBtn.textContent = "Play";
        const pauseBtn = document.createElement("button");
        pauseBtn.src = i;
        pauseBtn.id = "pause-btn";
        pauseBtn.textContent = "Pause";
        playBtn.addEventListener("click", () => {

        });
        pauseBtn.addEventListener("click", () => {

        } );
        soundCard.appendChild(title);
        soundCard.appendChild(playBtn);
        soundCard.appendChild(pauseBtn);
        container.appendChild(soundCard)
    }
}
createSoundBtn()