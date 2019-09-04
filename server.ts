// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

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
                console.log('decoded: ', decoded);
                if (decoded.user && decoded.exp && decoded.exp * 1000 - Date.now() >= 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
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

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.end('Server is up');
// });

app.post('/login', (req, res) => {
    if (req.body.user && req.body.user.toLowerCase() === 'vn0yyqe' && req.body.password === 'Mm24680') {
        console.log('Body: ', req.body);
        generateToken({user: req.body.user}, SECRET).then((token) => {
            res.json({status: 'OK', token});
        }).catch((error) => {
            res.json({status: error, token: null});
        });
    } else {
        res.json({status: 'Failed', token: null});
    }
});

app.get('/authCheck', (req, res) => {
    const header = req.headers.authorization;
    // console.log(req.headers);
    checkToken(header).then(result => {
        console.log('res: ', result);
        res.json({status: 'OK', authorized: result});
    }).catch(error => {
        console.log('error: ', error);
        res.json({authorized: false, status: error});
    });
});

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// app.use(tokenMiddleware);

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
