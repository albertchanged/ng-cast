angular.module('video-player')
  .component('app', {
    controller: function(youTube) {  
      // Performs a search on youTube and renders new videos
      this.search = (results) => {
        this.videos = results;
        this.currentVideo = this.videos[0];
      };
      // Initial rendering of example data
      this.videos = youTube.searchYouTube('pokemon', this.search);
      this.currentVideo = this.videos[0];
      // Selects a video from the sidebar
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
    },
    // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
    templateUrl: '/src/templates/app.html',
  });