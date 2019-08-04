const CronJob = require('cron').CronJob
const fetchUEFArticle = require('../wraping/webwraping')

const job = new CronJob('0 */1 * * * *', () => {
	console.log("from cron")
	fetchUEFArticle()
})

module.exports = job