const container = document.querySelector("#container");

const audioArray = ["sounds/rick_rolled_shortversion.mp3", "sounds/epic_sax_guy_shortversion.mp3"]

function createSoundBtn(){
    for (let i = 0; i < audioArray.length; i++) {
/*         const audio = new Audio([i]); */
        const soundCard = document.createElement("div");
        soundCard.id = "sound-card";
        const audio = document.createElement("audio");
        audio.src = audioArray[i];
        const title = document.createElement("p");
        title.textContent = "Sounds";
        title.id = "title";
        const playBtn =document.createElement("button");
/*         playBtn.src = i; */
        playBtn.id = "play-btn";
        playBtn.textContent = "Play";
        const pauseBtn = document.createElement("button");
/*         pauseBtn.src = i; */
        pauseBtn.id = "pause-btn";
        pauseBtn.textContent = "Pause";
        playBtn.addEventListener("click", () => {
            audio.play();
        });
        pauseBtn.addEventListener("click", () => {
            audio.pause();
        } );
        soundCard.appendChild(title);
        soundCard.appendChild(playBtn);
        soundCard.appendChild(pauseBtn);
        container.appendChild(soundCard);
        console.log();
        
        
    }
}
createSoundBtn()

const addSoundBtn = document.querySelector("#import-sound");
const customContainer = document.getElementById("custom-sounds");

let customSounds = [];

addSoundBtn.addEventListener("click", () => {
    const popUp = document.createElement("div");
    const closeBtn = document.createElement("button");
    const inputField = document.createElement("input");
    const addBtn = document.createElement("button");
    popUp.appendChild(closeBtn)
    popUp.appendChild(inputField)
    popUp.appendChild(addBtn)
    window.open(popUp, "popup")
})
    
