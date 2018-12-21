/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Contatti_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Contatti_db_schema = [];
const db_Contatti_db = [];

/**
 * SCHEMA DB Contatti_db
 */



 /**
  * Rubrica_telefonica
  */
db_Contatti_db_schema.Rubrica_telefonica = new mongoose.Schema({
	cognome: {
		type: 'String'
	},
	gruppo: {
		type: 'String'
	},
	interno: {
		type: 'String'
	},
	nome: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * User
  */
db_Contatti_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * contatti
  */
db_Contatti_db_schema.contatti = new mongoose.Schema({
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
	/*
	*/
});


 /**
  * domini_spc
  */
db_Contatti_db_schema.domini_spc = new mongoose.Schema({
	nome_dominio: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./Contatti_db_customSchema.js');
var Contatti_db_model = require('./Contatti_db_crud.js');

// Declare mongoose model

db_Contatti_db.Rubrica_telefonica = Contatti_db_model.connection.model('Rubrica_telefonica', db_Contatti_db_schema.Rubrica_telefonica );
db_Contatti_db.User = Contatti_db_model.connection.model('User', db_Contatti_db_schema.User );
db_Contatti_db.contatti = Contatti_db_model.connection.model('contatti', db_Contatti_db_schema.contatti );
db_Contatti_db.domini_spc = Contatti_db_model.connection.model('domini_spc', db_Contatti_db_schema.domini_spc );

module.exports = db_Contatti_db;

// Create ADMIN user if does not exist
createUser.createUser();
