const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async (request, response) => {
	//response.send('send')

	const saltPassword = await bcrypt.genSalt(10)
	const securedPassword = await bcrypt.hash(request.body.password, saltPassword)

	const signedUpUser = new signUpTemplateCopy({
		fullName: request.body.fullName,
		username: request.body.username,
		email: request.body.email,
		password: securedPassword
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
