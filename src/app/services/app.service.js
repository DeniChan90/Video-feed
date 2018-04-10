class AppService {
	constructor($http) {
		this.$http = $http;
	}

	getVideos() { 
		return this.$http.get('../mock-data/videos.json')
	}
}

export default AppService;
