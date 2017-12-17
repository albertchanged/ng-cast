angular.module('video-player')
  .component('videoListEntry', {
    
    bindings: {
      video: '<',
      selectVideo: '<',
      index: '='
    },

    templateUrl: '/src/templates/videoListEntry.html'

  });
