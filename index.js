const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
const server = http.createServer(app);
const socketIo = require('socket.io');

const io = socketIo(server);
const SECRET = 'hello';

async function generateToken(payload, secret) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, {expiresIn: 3600}, (error, encoded) => {
            if (error) {
                reject(new Error(error));
            } else {
                resolve(encoded);
            }
        });
    });
}

async function checkToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, {}, (error, decoded) => {
            if (error) {
                reject(error);
            } else {
                console.log("decoded: ", decoded);
                if (decoded.user && decoded.exp && decoded.exp * 1000 - Date.now() >= 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        })
    });
}

async function tokenMiddleware(req, res, next) {
    const header = req.headers.authorization;
    checkToken(header).then(result => {
        next();
    }).catch(error => {
        res.json({authorized: false, status: error});
    });
}

io.on('connection', (connection) => {
    connection.emit('message', {message: 'You are connected to the server!'});
    connection.on('disconnect', () => {
        console.log(`User disconnected!`);
    })
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.end('Server is up');
});

app.post('/login', (req, res) => {
    if (req.body.user && req.body.user.toLowerCase() === 'vn0yyqe' && req.body.password === 'Mm24680') {
        console.log('Body: ', req.body);
        generateToken({user: req.body.user}, SECRET).then((token) => {
            res.json({status: 'OK', token: token});
        }).catch((error) => {
            res.json({status: error, token: null});
        });
    } else {
        res.json({status: 'Failed', token: null});
    }
})

app.get('/authCheck', (req, res) => {
    const header = req.headers.authorization;
    // console.log(req.headers);
    checkToken(header).then(result => {
        console.log("res: ", result);
        res.json({status: 'OK', authorized: result});
    }).catch(error => {
        console.log("error: ", error);
        res.json({authorized: false, status: error});
    });
});

// app.use(tokenMiddleware);

app.get('/tokenizedRoute', (req, res) => {
    res.end('Successful');
});

server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
