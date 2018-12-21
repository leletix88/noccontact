// START - USED SERVICES
/*
 *	Rubrica_telefonicaService.create
 *		PARAMS: 
 *		
 *
 *	Rubrica_telefonicaService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	Rubrica_telefonicaService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * Rubrica_telefonicaService  
 */
// END - REQUIRED RESOURCES

app.controller('Rubrica_telefonicaEditController', ['$scope', '$location', '$routeParams', '$q', 'Rubrica_telefonicaService',
    function ($scope, $location, $routeParams, $q, Rubrica_telefonicaService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = Rubrica_telefonicaService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new Rubrica_telefonicaService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/rubrica_telefonicas/');
    		});
    	}
    	
    	$scope.remove = function(){
    		Rubrica_telefonicaService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/rubrica_telefonicas/');
    		});
    	}
    	
}]);