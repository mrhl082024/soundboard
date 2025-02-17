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

    soundCard.appendChild(title);
    soundCard.appendChild(audio);
    container.appendChild(soundCard);
  }
}
createSoundBtn();
