document.getElementById('toggle-sound').addEventListener('click', function() {
    var video = document.getElementById('video-bg');
    var soundIcon = this.querySelector('i');
    if (video.muted) {
        video.muted = false;
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
    } else {
        video.muted = true;
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
    }
});