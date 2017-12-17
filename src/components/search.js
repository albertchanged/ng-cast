angular.module('video-player')
  .component('search', {
    bindings: {
      searchVideos: '<',
      handleClick: '<',
      input: '<',
      results: '='
    },
    controller: function(youTube) {
      // this.input = '';
      this.handleClick = () => {
        this.searchVideos(youTube.getYouTube('hello'));
        console.log(youTube.getYouTube('hello'));
      };
      // console.log('Input is ', this.input);
      this.results = youTube.getYouTube('pokemon');
      // console.log(this.results);
      // searchVideos(this.results);
      // youTube.getYouTube(this.input);
      // console.log(youTube);
    },
    templateUrl: '/src/templates/search.html'

  });
