const container = document.querySelector("#container");

const audioArray = [
  "sounds/epic_sax_guy.mp3",
  "sounds/fbi_open_up.mp3",
  "sounds/metal_pipe.mp3",
  "sounds/oh_baby_a_triple.mp3",
  "sounds/quick_fart.mp3",
  "sounds/rick_rolled.mp3",
  "sounds/yooooo.mp3",
];

function createSoundBtn() {
  for (let i = 0; i < audioArray.length; i++) {
    const soundCard = document.createElement("div");
    soundCard.id = "sound-card";

    const audio = document.createElement(`audio`);
    audio.src = audioArray[i];
    audio.controls = true;
    audio.id = "audio";

    const title = document.createElement("p");
    title.textContent = audioArray[i].split("sounds/").pop();
    title.id = "title";

    // const playBtn = document.createElement("button");
    // playBtn.className = "sound-btn";
    // playBtn.textContent = "Play";
    // playBtn.id = "play-btn";

    // const pauseBtn = document.createElement("button");
    // pauseBtn.className = "sound-btn";
    // pauseBtn.textContent = "Pause";
    // pauseBtn.id = "pause-btn";

    // playBtn.addEventListener("click", () => {
    //   audio.play();
    // });

    // pauseBtn.addEventListener("click", () => {
    //   audio.pause();
    // });

    soundCard.appendChild(title);
    soundCard.appendChild(audio);
    // soundCard.appendChild(playBtn);
    // soundCard.appendChild(pauseBtn);
    container.appendChild(soundCard);
  }
}
createSoundBtn();
