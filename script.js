document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('danceGif').classList.remove('hidden');
  document.getElementById('heroImg').classList.add('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
  const yesBtn = document.getElementById('yesBtn');
  yesBtn.classList.add('big');
  yesBtn.style.transform = `scale(${1.5 + (yesBtn.scale || 0)})`;
  yesBtn.scale = (yesBtn.scale || 0) + 0.5;
});