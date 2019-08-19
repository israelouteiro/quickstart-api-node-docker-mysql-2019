const { Found } = require('./../../database/models');
 
class FoundService {

	save(req){
		let { value } = req.body; 
		let _pay = { value } 
		return new Promise(async (resolve, reject) => {  
			let result = await Found.create(_pay);
            resolve({ success: true, inserted_id: result.id }); 
		}) 
	}

	read(req){ 
		let _id = req.params.id;  
		return new Promise(async (resolve, reject) => {   
			let result = await Found.findById(_id);	
			resolve({ success: true, register: result }); 
		}) 
	}

	readAll(req){  
		return new Promise(async (resolve, reject) => {   
			let result = await Found.findAll();	
			resolve({ success: true, registers: result }); 
		}) 
	}

	update(req){
		let _id = req.params.id;  
		let { field } = req.body; 
		let _pay = { }

		if( field !== undefined ){ _pay['field'] = field ;}

		return new Promise(async (resolve, reject) => {  
			let result = await Found.update( _pay , { where: { id: _id } } )
            resolve({ success: true, updated: _pay }); 
		}) 
	}

	delete(req){
		let _id = req.params.id;   
		return new Promise(async (resolve, reject) => {   
			let result = await Found.destroy({ where: { id: _id } })
            resolve({ success: true });  
		}) 
	}

}

module.exports = FoundService;