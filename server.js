// 'use strict';

// const express = require('express');

// const http = require('http');

// Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// const HOST = '127.0.0.1';
// const PORT = 3000;

// App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello Worldfrom npm');
// });

// const app = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   });

// const http = require('http');
// const fs = require('fs');
// const filePath = '../public/index.html';

// const app = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.end('Error loading index.html');
//         } else {
//             res.end(data);
//         }
//     });
// });

// const runAlways = (req, res, next) => {
//     res.locals.myVariable = ' Hello from runAlways'
//     console.log(`A request was made to ${req.path}`)
//     if (req.path == '/') {

//         console.log(`This is the site root`)
//     }
//     next()
// }

// const publicRouter = require('./public/index.html')
// app.use('/public', publicRouter)
// app.use(runAlways)

// app.listen(PORT, HOST, () => {
//   console.log(`Running on http://${HOST}:${PORT}`);
// });



// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const PORT = process.env.PORT || 3030

// require('dotenv').config()

// mongoose.connect(process.env.DB_URL)
// const db = mongoose.connection
// db.on('error', (error) => console.log(error))
// db.on('open', () => console.log('Connected to DB!'))

// console.log(process.env.PASS)
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// const path = require('path');

// const filePath = path.join(__dirname, 'public', 'index.html');


// const runAlways = (req, res, next) => {
//     res.locals.myVariable = ' Hello from runAlways'
//     console.log(`A request was made to ${req.path}`)
//     if (req.path == '/') {

//         console.log(`This is the site root`)
//     }
//     next()
// }

// const publicRouter = require('./public/index.html')
// app.use('/public', publicRouter)
// app.use(runAlways)


// app.use(runAlways)

// app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

// const runAlways = (req, res, next) => {
//     res.locals.myVariable = ' Hello from runAlways'
//     console.log(`A request was made to ${req.path}`)
//     if (req.path == '/') {
//         console.log(`This is the site root`)
//     }
//     next()
// }

// app.use(runAlways)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))