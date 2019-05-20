const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Post request')
})

app.put('/', (req, res) => {
    res.send('Put request')
})

app.delete('/', (req, res) => {
    res.send('Delete request')
})

app.listen(3000, () => console.log('Server is listening on port 3000'))