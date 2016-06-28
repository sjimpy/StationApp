(function() {
    'use strict';

    angular
        .module('services')
        .service("StationsService", StationsService);

    function StationsService($http) {
        var self = this;
        
        self.allStations = [  
        ];

        self.createStation = createStation;

        function createStation(newStation){
            self.allStations.splice(0, 0, newStation);
        };

        $http.get('data/trainstations.json').then(function(stations){
    
            self.allStations.length = 0;
            
            angular.extend(self.allStations, stations.data);
        });
    }
})();
