const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')
const port = 3000

mongoose
    .connect(
        'mongodb://localhost:27017/authexample', {
            useNewUrlParser: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.set('port', port)

const server = http.createServer(app)

server.on('listening', () => {
    console.log('Server is listening on port ' + port)
})

server.listen(port)