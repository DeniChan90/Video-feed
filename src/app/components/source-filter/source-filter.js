import angular from 'angular';

let srcFilter = () => {
	return {
		template: require('./source-filter.html'),
		link : function(scope){
			scope.$watch('srcFilterVal', function(){
				scope.$parent.srcFilterVal = scope.srcFilterVal;
			});
		},
		scope: {
			applyFilter: '@',
		},
		controller: 'SrcFilterCtrl',
		controllerAs: 'SrcFilterCtrl'
	}
};

const MODULE_NAME = 'srcFilter';


class SrcFilterCtrl {
	constructor() {
		this.filterOptions = [
			{
				label : 'Facebook',
				value : 'facebook'
			},
						{
				label : 'Youtube',
				value : 'youtube'
			},
						{
				label : 'Url',
				value : 'url'
			},
						{
				label : 'All',
				value : ''
			}
		];
	}
}

angular.module(MODULE_NAME, [])
	.directive('srcFilter', srcFilter)
	.controller('SrcFilterCtrl', SrcFilterCtrl);

export default MODULE_NAME;