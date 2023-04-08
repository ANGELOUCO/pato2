// Handles loading the events for <model-viewer>'s slotted progress bar

// Inclua a biblioteca Three.js
import * as THREE from 'three';

// Crie um objeto de áudio
const audioLoader = new THREE.AudioLoader();
const audio = new THREE.Audio(listener);
audioLoader.load('quack - quack.mp3', function (buffer) {
    audio.setBuffer(buffer);
    audio.setLoop(false);
    audio.setVolume(1);
});

// Adicione o áudio à sua cena
const scene = new THREE.Scene();
scene.add(audio);

// Reproduza o áudio quando a animação é acionada
function playAudio() {
    audio.play();
}

// Adicione um evento de clique ao objeto que acionará a animação e o áudio
const object = new THREE.Mesh(geometry, material);
object.addEventListener('click', function () {
    playAnimation();
    playAudio();
});

// Função que aciona a animação
function playAnimation() {
    // Adicione aqui o código para a animação
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
            // Se a animação estiver sendo executada, verifique se o áudio está pausado ou se já foi iniciado
            if (audio.paused || audio.currentTime === 0) {
                audio.play();
            }
            // Defina o tempo de reprodução do áudio com base no tempo atual da animação
            audio.currentTime = currentTime / 1000; // A duração do áudio é em segundos, portanto, divida por 1000 para obter segundos
        } else {
            // Se a animação não estiver sendo executada, pause o áudio e defina o tempo de reprodução como 0 para reiniciar o áudio
            audio.pause();
            audio.currentTime = 0;
        }
    });


};
document.querySelector('model-viewer').addEventListener('progress', onProgress);