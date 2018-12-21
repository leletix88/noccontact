// START - USED SERVICES
/*
 *	contattiService.create
 *		PARAMS: 
 *		
 *
 *	contattiService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	contattiService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * contattiService  
 */
// END - REQUIRED RESOURCES

app.controller('contattiEditController', ['$scope', '$location', '$routeParams', '$q', 'contattiService',
    function ($scope, $location, $routeParams, $q, contattiService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = contattiService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new contattiService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/contattis/');
    		});
    	}
    	
    	$scope.remove = function(){
    		contattiService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/contattis/');
    		});
    	}
    	
}]);