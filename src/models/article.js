const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	shortcutContent: {
		type: String
		// required: true
	},
	new: {
		type: Boolean
	},
	content: {
		type: String
	},
	imageUrl: {
		type: String
	}
}, {
	timestamps: true
})

const Article = mongoose.model('Article', articleSchema)



module.exports = Article