const request = require('request')
const cheerio = require('cheerio')
const Article = require('../models/article')

const fetchUEFArticle = () => {
	request('https://www.uef.edu.vn/', async (error, response, body) => {
	const $ = cheerio.load(body,  {
	    xml: {
	      normalizeWhitespace: true,
	    }
	})
	const newTitles = []
	const titles = []
	const shortcutContents = []
	const content = []
	const wrapTitles = []
	const imageUrls = []


	await Article.deleteMany({})

	$('.news-title a').each((i, elem) => {
		newTitles[i] = $(elem).text()
		
	})

	$('.news-summary').each((i, el) => {
		shortcutContents[i] = $(el).text()
	})


	$('.title a').each((i, elem) => {
		titles[i] = $(elem).text()
	})

	$('.wrap-image a img').each((i, elem) => {
		imageUrls[i] = $(elem).attr('src')
	})


	newTitles.forEach( async (newTitle, i) => {

		try {
			await new Article({
			title: newTitle,
			new: true,
			shortcutContent: shortcutContents[i],
			imageUrl: imageUrls[i]
			}).save()
		} catch (e) {
			console.log(e)
		}	
	})

	titles.forEach( async title => {
		try {
			await new Article({
				title
			}).save()

		} catch (e) {
			console.log(e)
		}
	})


})
}


module.exports = fetchUEFArticle