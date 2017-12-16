angular.module('video-player')
.service('youTube', function($http, $window) {
  // TODO
  this.getYouTube = function(name) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: $window.YOUTUBE_API_KEY,
        q: 'cats',
        parts: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      },
      dataType: 'json',
      timeout: 5000,
      success: function(data) {
        console.log('success', data);
        var results = data.items;
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  };
});

