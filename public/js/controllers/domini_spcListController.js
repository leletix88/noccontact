// START - USED SERVICES
/*
 *	domini_spcService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	domini_spcService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * domini_spcService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('domini_spcListController', ['$scope', 'domini_spcService',
    function ($scope, domini_spcService ) {
		
    	$scope.list = domini_spcService.query();
    	
}]);