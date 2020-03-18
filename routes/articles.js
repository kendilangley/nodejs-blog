const express = require('express')
const router = express.Router()
const Article = require('./../models/article')

router.get('/new', (req, res) => {
	res.render('articles/new')
})

router.post('/', async (req, res) => {
	const article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown
	})

	await article.save()

})

module.exports = router