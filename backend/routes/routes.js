const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup', (request, response) => {
	//response.send('send')

	

	const signedUpUser = new signUpTemplateCopy({
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		email: request.body.email,
		phone: request.body.phone
	})
	signedUpUser.save()
	.then(data => {
		response.json(data)
	})
	.catch(error => {
		response.json(error)
	})
})


module.exports = router
