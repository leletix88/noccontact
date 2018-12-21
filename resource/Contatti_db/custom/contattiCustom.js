
const app = require('../../../app.js');
const db_Contatti_db = require('../../../db/Contatti_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB contatti
 * 
	{
		mail: {
			type: 'String'
		},
		nome: {
			type: 'String', 
			required : true
		},
		note: {
			type: 'String'
		},
		numero: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


