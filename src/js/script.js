const play = document.getElementById("play");
const audio = new Audio("./src/audio/Merry on the Moor.mp3");

function playMusic() {
  audio.paused ? audio.play() : audio.pause();
}

play.addEventListener("click", playMusic);
