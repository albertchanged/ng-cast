angular.module('video-player')
  .component('videoList', {
    
    bindings: {
      videos: '<',
      video: '<',
      selectVideo: '<',
      index: '='
    },
    
    templateUrl: '/src/templates/videoList.html'
  });
