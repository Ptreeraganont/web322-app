const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (_, res) => {
	res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (_, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/students', (_, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/intlstudents', (_, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/programs', (_, res) => {
	res.sendFile(__dirname + '/views/about.html')
})

app.get('*', (_, res) => {
	res.status(404).send('Page Not Found')
})

app.listen(PORT, () => {
	console.log(`Express http server listening on ${PORT}`)
})