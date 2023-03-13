import player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(`vimeo-player`);
    
const player = LOCALSTORAGE_KEY = "videoplayer-current-time";


const onPlay = function (time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);
};
player.on(`timeupdate`, throttle((onPlay), 1000));

player.on(`timeupdate`, onPlay);

console.log(player);

// player.setCurrentTime(30.456).then(function (seconds) {
    
// }).catch(function (error) {
//     switch (error.name) {
//         case `RangeError`:

//             break;

//         default:
            
//             break;
        
//     }
// });






//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

// console.log(iframe);