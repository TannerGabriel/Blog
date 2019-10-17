const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000

mongoose
    .connect(
        'mongodb://localhost:27017/auth-example', {
            useNewUrlParser: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.use(bodyParser());
app.set('port', port)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const server = http.createServer(app)

server.on('listening', () => {
    console.log('Server is listening on port ' + port)
})

server.listen(port)