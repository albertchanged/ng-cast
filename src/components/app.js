angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = this.videos[0];
    this.selectVideo = (video) => {
      this.video = video;
      console.log(video);
    };
    // youTube.getYouTube('sdfd');
  },
  
  // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
  templateUrl: '/src/templates/app.html',
  
  

});
