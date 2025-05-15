
  const audio = document.getElementById('audio-player');
  const seekBar = document.getElementById('seek-bar');
  const currentTime = document.getElementById('current-time');
  const totalTime = document.getElementById('total-time');
  const playBtn = document.getElementById('play-btn');

  function playTrack(title, artist, src) {
    document.getElementById('spotify-player').classList.remove('hidden');
    document.getElementById('track-title').textContent = title;
    document.getElementById('track-artist').textContent = artist;
    audio.src = src;
    audio.play();
    playBtn.textContent = '⏸️';
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playBtn.textContent = '▶️';
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  }

  audio.addEventListener('loadedmetadata', () => {
    seekBar.max = audio.duration;
    totalTime.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });

  seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
  });

  function prevTrack() {
    audio.currentTime = 0;
  }

  function nextTrack() {
    audio.currentTime = audio.duration;
  }

  function toggleFAQ() {
    const popup = document.getElementById('faqPopup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
  }

 
  function scrollGallery(direction) {
    const container = document.getElementById('scrollGallery');
    const scrollAmount = 180; // ширина елемента + gap
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
