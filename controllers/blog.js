var feeds = [];
	
angular.module('MaxRoss')
	.factory('FeedLoader', function ($resource) {
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		});
	})
	.service('FeedList', function ($rootScope, FeedLoader) {
		this.get = function() {
			var feedSources = [
				{title: 'Ross Music', url: 'https://maxrossmusic.wordpress.com/feed/'}
			];
			if (feeds.length === 0) {
				for (var i=0; i<feedSources.length; i++) {
					FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
						var feed = data.responseData.feed;
						feeds.push(feed);
						// console.log(feed);
					});
				}
			}
			return feeds;
		};
	})
	.controller('FeedCtrl', function ($scope, FeedList) {
		$scope.feeds = FeedList.get();
		$scope.$on('FeedList', function (event, data) {
			$scope.feeds = data;
		});

	});