const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/webwarping', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
})