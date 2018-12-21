// START - USED SERVICES
/*
 *	Rubrica_telefonicaService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	Rubrica_telefonicaService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * Rubrica_telefonicaService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('Rubrica_telefonicaListController', ['$scope', 'Rubrica_telefonicaService',
    function ($scope, Rubrica_telefonicaService ) {
		
    	$scope.list = Rubrica_telefonicaService.query();
    	
}]);