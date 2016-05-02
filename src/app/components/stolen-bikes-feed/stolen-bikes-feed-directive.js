export function StolenBikesFeed() {
    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/stolen-bikes-feed/stolen-bikes-feed.html',
        controller: StolenBikesController,
        bindToController: true,
        controllerAs: 'vm'
    }
    return directive;
}

class StolenBikesController {
    constructor($http) {
        'ngInject';
        //https://api.twitter.com/1.1/search/tweets.json?q=%40bikes
        this.http = $http;
        this.stolenBikes = [];

        this.http.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity_square=100')
            .success((response) => {
                this.stolenBikes = response.bikes;
            });
    }
}