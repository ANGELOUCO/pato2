// Handles loading the events for <model-viewer>'s slotted progress bar

// Inclua a biblioteca Three.js
import * as THREE from 'three';

// Crie um objeto de �udio
const audioLoader = new THREE.AudioLoader();
const audio = new THREE.Audio(listener);
audioLoader.load('quack - quack.mp3', function (buffer) {
    audio.setBuffer(buffer);
    audio.setLoop(false);
    audio.setVolume(1);
});

// Adicione o �udio � sua cena
const scene = new THREE.Scene();
scene.add(audio);

// Reproduza o �udio quando a anima��o � acionada
function playAudio() {
    audio.play();
}

// Adicione um evento de clique ao objeto que acionar� a anima��o e o �udio
const object = new THREE.Mesh(geometry, material);
object.addEventListener('click', function () {
    playAnimation();
    playAudio();
});

// Fun��o que aciona a anima��o
function playAnimation() {
    // Adicione aqui o c�digo para a anima��o
}



const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'quack-quack.mp3');
    audioElement.setAttribute('preload', 'auto');
    document.body.appendChild(audioElement);

    model.addEventListener('update', (event) => {
        const animation = event.detail.animations[0];
        const currentTime = animation.currentTime;

        if (animation.playing) {
            // Se a anima��o estiver sendo executada, verifique se o �udio est� pausado ou se j� foi iniciado
            if (audio.paused || audio.currentTime === 0) {
                audio.play();
            }
            // Defina o tempo de reprodu��o do �udio com base no tempo atual da anima��o
            audio.currentTime = currentTime / 1000; // A dura��o do �udio � em segundos, portanto, divida por 1000 para obter segundos
        } else {
            // Se a anima��o n�o estiver sendo executada, pause o �udio e defina o tempo de reprodu��o como 0 para reiniciar o �udio
            audio.pause();
            audio.currentTime = 0;
        }
    });


};
document.querySelector('model-viewer').addEventListener('progress', onProgress);