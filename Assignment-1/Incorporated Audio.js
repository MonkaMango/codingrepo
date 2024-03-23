//Audio functions
function playAudio() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
        .then(() => console.log('Audio playing'))
        .catch((error) => console.error('Audio playback failed:', error));
}




