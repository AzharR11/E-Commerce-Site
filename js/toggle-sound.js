// Event listener for toggling video sound on click
document.getElementById('toggle-sound').addEventListener('click', function() {
    // Retrieve video element and sound icon element
    var video = document.getElementById('video-bg');
    var soundIcon = this.querySelector('i');
    if (video.muted) {
        // Unmute video and update sound icon
        video.muted = false;
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
    } else {
        // Mute video and update sound icon
        video.muted = true;
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
    }
});