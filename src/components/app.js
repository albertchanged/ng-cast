angular.module('video-player')

.component('app', {
  controller: function() {  

    // Initial rendering of example data
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    // Performs a search on youTube and renders new videos
    this.search = (results) => {
      this.videos = results;
      this.currentVideo = this.videos[0];
    };

    // Selects a video from the sidebar
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    // Invoke a search to change from the initial rendering
    // youTube.search('cats');

  },
  
  // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
  templateUrl: '/src/templates/app.html',
  
  

});
