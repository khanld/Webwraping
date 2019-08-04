const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
require('./db/mongoose')
const job = require('./cronjob/cron')
const Article = require('./models/article')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


job.start()

app.get('/', async (req, res) => {
	
	let articles = await Article.find()

	const newArticles = articles.filter(article => {
		return article.new === true
	})
	articles = articles.slice(3)

	res.render('homepage', {
		newTitle0: newArticles[0].title,
		shortcutContent0: newArticles[0].shortcutContent,
		imageUrl0: newArticles[0].imageUrl,
		newTitle1: newArticles[1].title,
		shortcutContent1: newArticles[1].shortcutContent,
		imageUrl1: newArticles[1].imageUrl,
		newTitle2: newArticles[2].title,
		shortcutContent2: newArticles[2].shortcutContent,
		imageUrl2: newArticles[2].imageUrl,

		title0: articles[0].title,
		title1: articles[1].title,
		title2: articles[2].title,
		title3: articles[3].title,
		title4: articles[4].title,
		title5: articles[5].title,
		title6: articles[6].title,
		title7: articles[7].title,
		title8: articles[8].title,
		title9: articles[9].title,
		title10: articles[10].title,
		title11: articles[11].title
	})
})


app.listen(3000, ()=> {
	console.log('Sever is available')
})