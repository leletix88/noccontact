// START - USED SERVICES
/*
 *	contattiService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	contattiService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * contattiService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('contattiListController', ['$scope', 'contattiService',
    function ($scope, contattiService ) {
		
    	$scope.list = contattiService.query();
    	
}]);