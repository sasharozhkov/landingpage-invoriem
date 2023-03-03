export const videoBtn = document.querySelector('#video-btn');
export const videoPicture = document.querySelector('.video__picture');
export const videoWrapper = document.querySelector('.video')
export const video = document.querySelector('#video-file');
// videoBtn.addEventListener('click', function () {
//   videoPicture.classList.add('none');
//   videoWrapper.classList.remove('overlay');
//   videoBtn.classList.add('none')
//   if (video.paused) {
//     video.play()
//   }
// })
videoWrapper.addEventListener('click', function () {
  if (video.paused) {
    videoPicture.classList.add('none');
    videoWrapper.classList.remove('overlay');
    videoBtn.classList.add('none')
    video.play()
  } else {
    // videoPicture.classList.remove('none');
    videoWrapper.classList.add('overlay');
    videoBtn.classList.remove('none')
    video.pause();
  }
})