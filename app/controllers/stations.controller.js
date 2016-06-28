(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StationsController', StationsController);

    function StationsController(StationsService) {

        var vm = this;

        vm.allStations = StationsService.allStations;
        vm.newStation = {};

        vm.setStation = setStation;

        function setStation(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation; 
            else
                vm.currentStation = undefined;
            vm.map = { center: { latitude: currentStation.geoLat, longitude:  currentStation.geoLong }, zoom: 16 };

        };

        vm.map = { center: { latitude: 52, longitude: 5.5 }, zoom: 7 };

    }


})();

