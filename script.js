function grito() {
  const audio = document.getElementById("scream-sound");
  audio.volume = 0.6;
  audio.play();

  const flash = document.createElement('div');
  flash.style.position = 'fixed';
  flash.style.top = 0;
  flash.style.left = 0;
  flash.style.width = '100%';
  flash.style.height = '100%';
  flash.style.background = 'rgba(255,0,0,0.8)';
  flash.style.zIndex = 9999;
  flash.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(flash);
  
  setTimeout(() => {
    flash.style.opacity = 0;
    setTimeout(() => flash.remove(), 300);
  }, 150);
}

document.getElementById("btnSusto").addEventListener("click", grito);
