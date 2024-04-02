// ссылка для API
// https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API
// https://skillbox.ru/media/code/kak_sozdat_pleer_dlya_sayta/

// рабтаем с кнопками видео и тегами
const video = document.querySelector('video'), 
    play = document.querySelector('.play'),
    stopBtn = document/queueMicrotask('.stop'),
    pause = document.querySelector('.pause'),
    mute = document.querySelector('.mute');
    mute2 = document.querySelector('.mute2');

    play.addEventListener('click', () => {
        video.play()
    })

    pause.addEventListener('click', () => {
        video.pause()
    })

    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime();
    })

    mute.addEventListener('click', () => {
        video.volume = 0
    })

    mute2.addEventListener('click', () => {
        video.volume = 0
    })