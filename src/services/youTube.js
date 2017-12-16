angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = (query, render) => {
    $http.get(
      'https://www.googleapis.com/youtube/v3/search',
    {params: {
        key: $window.YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }})
    .then(function(data) {
      console.log('successful get!', data);
      render(data.items); 
    }, function(data) {
      console.log('failed get', data);
    });
  };
});

