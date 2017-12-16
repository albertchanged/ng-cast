angular.module('video-player')

.component('app', {
  controller: function(youTube) {  

    // Initial rendering of example data
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    // Performs a search on youTube and renders new videos
    this.searchYouTube = (query) => {
      youTube.search(query, (render) => {
        this.video = render;
        this.currentVideo = this.video[0];
      });
    }

    // Selects a video from the sidebar
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    // Invoke a search to change from the initial rendering
    youTube.search('cats');

  },
  
  // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
  templateUrl: '/src/templates/app.html',
  
  

});
