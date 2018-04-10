import angular from 'angular';

import srcFilter from './components/source-filter/source-filter';
import videoItem from './components/video-item/video-item';

import AppService from './services/app.service';

import { shortNumber } from './filters/short-number';

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.css';

let app = () => {
	return {
		template: require('./app.html'),
		controller: 'AppCtrl',
		controllerAs: 'app'
	}
};

class AppCtrl {
	constructor(appService) {
		appService.getVideos().then((videos) => {
			this.videos = videos.data.items;
		},
		(err) => {
			console.log('Error... >>> ', err);
		});
	}
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
		srcFilter,
		videoItem
	])
	.directive('app', app)
	.controller('AppCtrl', AppCtrl)
	.service('appService', AppService)
	.filter( 'shortNumber', shortNumber);

export default MODULE_NAME;