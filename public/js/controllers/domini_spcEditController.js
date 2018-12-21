// START - USED SERVICES
/*
 *	domini_spcService.create
 *		PARAMS: 
 *		
 *
 *	domini_spcService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	domini_spcService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * domini_spcService  
 */
// END - REQUIRED RESOURCES

app.controller('domini_spcEditController', ['$scope', '$location', '$routeParams', '$q', 'domini_spcService',
    function ($scope, $location, $routeParams, $q, domini_spcService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = domini_spcService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new domini_spcService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/domini_spcs/');
    		});
    	}
    	
    	$scope.remove = function(){
    		domini_spcService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/domini_spcs/');
    		});
    	}
    	
}]);