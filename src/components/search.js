angular.module('video-player')
.component('search', {
	
  bindings: {
    search: '<'
  },

  controller: function(youTube) {
    this.newQuery = '';
    this.onClick = () => {
      youTube.searchYouTube(this.newQuery, this.search);
      this.newQuery = '';
    };
  },

  templateUrl: '/src/templates/search.html'
  
});
