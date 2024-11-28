// Tham chiếu đến các nút và âm thanh
const musicToggle = document.getElementById("music-toggle");
const soundToggle = document.getElementById("sound-toggle");

// Biến trạng thái nhạc và âm thanh
let isMusicPlaying = false;
let isSoundEnabled = true;

// Bật/tắt nhạc nền
musicToggle.addEventListener("click", () => {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    musicToggle.innerHTML = '<span style="color:red;">🚫</span>'; // Hiển thị biểu tượng tắt
  } else {
    backgroundMusic.play();
    musicToggle.innerHTML = "🎵"; // Hiển thị biểu tượng bật
  }
  isMusicPlaying = !isMusicPlaying;
});

// Bật/tắt âm thanh hiệu ứng
soundToggle.addEventListener("click", () => {
  isSoundEnabled = !isSoundEnabled;
  soundToggle.innerHTML = isSoundEnabled
    ? '<span style="color:green;">🔊</span>'
    : '<span style="color:red;">🚫</span>';
});

// Ví dụ thêm hiệu ứng âm thanh (khi click nút chơi)
document.querySelector(".play-button").addEventListener("click", () => {
  if (isSoundEnabled) {
    const soundEffect = new Audio("click-sound.mp3");
    soundEffect.play();
  }
  alert("Bắt đầu chơi!");
});
