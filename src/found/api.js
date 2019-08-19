const FoundService = require('./service');

const foundService = new FoundService();

class FoundApi { 
	
	index(req, res) {
		/**
		 * @api {get} /found 2 Read all `found` options
		 * @apiName ReadAllFound
		 * @apiGroup Found
		 * @apiVersion 1.0.0 
		 *
		 * @apiSuccess {Boolean} success
		 * @apiSuccess {Array} registers Array of all registers found  
		 * @apiSuccess {String} register.field Field value 
		 *
		 * @apiError {Boolean} success 
		 * @apiError {Array} err Error object
		 *
		 */
		 foundService.readAll(req)
			.then( response => { res.send(response); })
			.catch( err => { res.status(400).send(err); })
	} 
	
	read(req, res) {
		/**
		 * @api {get} /found/:id 2.1 Read specific `found` option
		 * @apiName ReadFound
		 * @apiGroup Found
		 * @apiVersion 1.0.0
		 *
		 * @apiSuccess {Boolean} success
		 * @apiSuccess {Object} register Object of specific register 
		 * @apiSuccess {String} register.field Field value 
		 *
		 * @apiError {Boolean} success 
		 * @apiError {Array} err Error object
		 *
		 */
		 foundService.read(req)
			.then( response => { res.send(response); })
			.catch( err => { res.status(400).send(err); })
	}    

	store(req, res){
		/**
		 * @api {post} /found 1 Create new `found` option
		 * @apiName CreateFound
		 * @apiGroup Found
		 * @apiVersion 1.0.0
		 *
		 * @apiParam {String} field Field to store 
		 *
		 * @apiSuccess {Boolean} success
		 * @apiSuccess {String} inserted_id String of `_id` inserted  
		 *
		 * @apiError {Boolean} success 
		 * @apiError {Array} err Error object
		 *
		 */

		foundService.save(req)
			.then( response => { res.send(response); })
			.catch( err => { res.status(400).send(err); })
	}

	update(req, res) {
		/**
		 * @api {put} /found/:id 3 Update specific `found` option
		 * @apiName UpdateFound
		 * @apiGroup Found
		 * @apiVersion 1.0.0
		 *
		 * @apiParam {String} [field] Field to update 
		 *
		 * @apiSuccess {Boolean} success
		 * @apiSuccess {Object} updated Object with updated fields  
		 *
		 * @apiError {Boolean} success 
		 * @apiError {Array} err Error object
		 *
		 */
		 foundService.update(req)
			.then( response => { res.send(response); })
			.catch( err => { res.status(400).send(err); })
	}  

	destroy(req, res) {
		/**
		 * @api {delete} /found/:id 4 Delete specific `found` option
		 * @apiName DeleteFound
		 * @apiGroup Found
		 * @apiVersion 1.0.0 
		 *  
		 * @apiSuccess {Boolean} success 
		 *
		 * @apiError {Boolean} success 
		 * @apiError {Array} err Error object
		 *
		 */
		foundService.delete(req)
			.then( response => { res.send(response); })
			.catch( err => { res.status(400).send(err); })
	}  
}


module.exports = FoundApi;