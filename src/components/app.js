angular.module('video-player')

  .component('app', {
    bindings: {
      input: '=',
      data: '<',
      results: '='
    },
    controller: function() {
      this.input = '';
      // this.results = youTube.getYouTube('hello');
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      
      this.handleClick = () => {
        this.searchVideos(this.results);
      };
      this.searchVideos = (data) => {
        this.videos = data;
        this.video = this.videos[0];
      };
      this.selectVideo = (index) => {
        this.video = this.videos[index];
      };
    },
    
    // template: '<p> videoList: <strong>{{$ctrl.videoList}}</strong></p>',
    templateUrl: '/src/templates/app.html',
  });
