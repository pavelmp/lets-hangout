'use strict';

describe('DashBoardController', function() {
  var $scope, $rootScope, createController, $location, DashBoard, httpBackend, $window, $stateParams,	
	SubCategory, $ionicPopup, $ionicLoading, $ionicPopover, $ionicModal, store;

  	beforeEach(function () {
        module('lets-hangout');
    });
  	var $controller;

  	beforeEach(inject(function ($injector, $controller, $httpBackend) {
		// mock out our dependencies

		$rootScope = $injector.get('$rootScope');
		$httpBackend = $injector.get('$httpBackend');
		DashBoard = $injector.get('DashBoard');
		$location = $injector.get('$location');
		$scope = $rootScope.$new();
		createController = function(){
			$controller('DashBoardController', {
            	$scope: $scope
            	 
       		});
		}
		httpBackend = $httpBackend
    }));


    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
       	httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a subC property on the $scope', function() {
    	createController();
	     expect($scope.options).toBeDefined();
    });
});
