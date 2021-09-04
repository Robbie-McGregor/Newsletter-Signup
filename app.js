const express = require('express')
const axios = require('axios')

const app = express()

port = 80

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/signup', (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    console.log(firstName, lastName, email)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})