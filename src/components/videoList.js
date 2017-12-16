angular.module('video-player')
.component('videoList', {
  
  bindings: {
    videos: '<',
    video: '<',
    selectVideo: '<',
  },
  
  templateUrl: '/src/templates/videoList.html'
});
