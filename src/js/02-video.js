import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//    Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(KEY);

const onPlay = function (data) {
    const setting = JSON.stringify(data.seconds);
    localStorage.setItem(KEY, setting)
};

player.on('timeupdate', throttle(onPlay, 1000));
    
player.setCurrentTime(JSON.parse(currentTime)).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
   

    player.getVideoTitle().then(function(title) {
    
    });

 