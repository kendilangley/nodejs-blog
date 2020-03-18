const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost:127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/articles', articleRouter)

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	const articles = [{
		title: "Article Title 1",
		createdAt: new Date(),
		description: "Article description 1"
	},
	{
		title: "Article Title 2",
		createdAt: new Date(),
		description: "Article description 2"
	}]
	res.render('articles/index', { articles: articles })
})

app.listen(3500, console.log('+++ Server Connected on Port 3500 +++'))
