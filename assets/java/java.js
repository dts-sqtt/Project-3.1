var myVideo = document.getElementById("video1");
var btn = document.getElementById("playBtn");
myVideo.removeAttribute("controls");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        btn.style.display = "none";
        myVideo.setAttribute("controls", "controls");
    } else myVideo.pause();
}
