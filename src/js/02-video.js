import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const localStorageKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let seconds = localStorage.getItem(localStorageKey) ?? 0;
player.setCurrentTime(seconds);
player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(localStorageKey, seconds);
    console.log(seconds);
  }, 1000)
);
