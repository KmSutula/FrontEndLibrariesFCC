const displayName = document.getElementById("display");
const drumBtns = document.querySelectorAll(".drum-pad");
const audioClips = document.querySelectorAll(".clip");



drumBtns.forEach((btn) => {
  btn.addEventListener("click", playAudio);
});
drumBtns.forEach(btn => btn.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAudioKey);




function playAudioKey(e) {
  const audio = document.getElementById(`${e.code.slice(-1)}`)
  if (!audio) return;
  else{
    const btn = audio.parentElement;
    btn.classList.add('playing')
  audio.currentTime = 0;
    audio.play();
    displayName.innerText = btn.id
  }
}


function playAudio(e) {

  const audio = document.getElementById(`${e.target.innerText}`);
   audio.currentTime = 0;
    audio.play();
    

}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
e.target.classList.remove('playing');
}