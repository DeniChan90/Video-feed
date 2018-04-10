import angular from 'angular';
import '../../../style/video-item.css';

let videoItem = () => {
	return {
		template: require('./video-item.html'),
		scope: {
			video: '=',
		},
		controller: 'VideoCtrl',
		controllerAs: 'videoCtrl'
	}
};

const MODULE_NAME = 'videoItem';


class VideoCtrl {
	constructor($sce) {
		this.$sce = $sce;
	}

	getVideoUrl(video) {
		switch (video.source){
			case 'facebook':
				return this.$sce.trustAsResourceUrl(`https://www.facebook.com/v2.3/plugins/video.php?allowfullscreen=true&container_width=800&href=https%3A%2F%2Fwww.facebook.com%2Fredbull%2Fvideos%2F${video.videoId}%2F&locale=en_US&sdk=joey`);
			case 'youtube':
				return this.$sce.trustAsResourceUrl(`https://www.youtube.com/embed/${video.videoId}`);
			default:
				return this.$sce.trustAsResourceUrl( video.url);

		}
	}

	videoDataMissing(video) {
		let viewsAndTitle = !video.views || !video.title;
		return  !(video.url || video.videoId) ||viewsAndTitle;
	}
}

angular.module(MODULE_NAME, [])
	.directive('videoItem', videoItem)
	.controller('VideoCtrl', VideoCtrl);

export default MODULE_NAME;