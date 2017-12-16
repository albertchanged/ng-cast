angular.module('video-player')
.component('search', {

	bindings: {
		searchYouTube: '<'
	},

	controller: function() {
		this.newQuery = '';
		this.onClick = () => {
			this.searchYouTube(this.newQuery);
			this.newQuery = '';
		};
	},


  templateUrl: '/src/templates/search.html'
  
});
