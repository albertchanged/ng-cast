angular.module('video-player')
  .component('search', {
    bindings: {
      search: '<',
    },
    controller: function(youTube) { 
      // On Click Search
      this.newQuery = '';
      this.onClick = () => {
        youTube.searchYouTube(this.newQuery, this.search);
        this.newQuery = '';
      };
      // LiveSearch
      this.liveSearch = _.throttle(function() {
        youTube.searchYouTube(this.newQuery, this.search);
      }, 500);    
    },
    directive: function() {
      return {
        bindings: {
          youTube: '<'
        } 
      };
    },
    templateUrl: '/src/templates/search.html'   
  });