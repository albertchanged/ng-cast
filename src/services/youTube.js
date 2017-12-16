angular.module('video-player')
.service('youTube', function($http) {
  this.searchYouTube = (query, callback) => {
    return $http(
      { method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyBbMMN2JfhM7EKcDpvxTt6q-vsDabPe9oQ',
          q: query,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          videoEmbeddable: true
        }})
    .then(function successCallback(response) {
      console.log('successful get!', response.data.items); 
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('failed get', response);
    });
  };
});

