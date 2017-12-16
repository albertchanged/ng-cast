angular.module('video-player')

.component('app', {
  
  
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    // this.selectVideo = () => {
      
    // };
  },

  // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
  templateUrl: '/src/templates/app.html',
  
  

});
