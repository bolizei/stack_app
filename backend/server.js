const express = require('express'); // importiere express
const cors = require('cors'); // importiere cross origin policies
const bodyParser = require('body-parser'); // importiere body parser

const http = require('http'); 


const app = express(); // erstelle eine express-app (instanz)

// benutzt die cors und den body parser mit der express app
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// erstelle route fuer '/verdoppeln'
app.post('/verdoppeln', function (req, res) {
    if (!req.body.wert || req.body.wert == undefined) {
        res.statusCode = 401;
        res.send({
            'error': 'wert fehlt'
        });
    } else {
        let response;
        if (req.body.wert == 'Wajeeh') {
            response = "zwei wajeehs";
        } else {
            response = 2 * req.body.wert;
        }
        console.log(req.body);
        res.statusCode = 200;
        res.send({
            'wert': response
        });
    }
});

app.get('/test', (req, res) => {
    res.send('hahahahaha');
})

// erstelle route fuer '/gallery'
app.post('/gallery', function (req, res) {
    let response;
    console.log('gallerie route aufgerufen');
    const gallery_list = [{
            title: 'Bild 1',
            src: 'image1.jpg'
        },
        {
            title: 'Bild 2',
            src: 'image2.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
        {
            title: 'Bild 3',
            src: 'image3.jpg'
        },
    ];

    res.statusCode = 200;
    res.send({
        'gallery': gallery_list
    });
});


// lass den server auf port 3333 laufen
port = 3333;
app.listen(port, function () {
    console.log('server laeuft auf port ' + port);
});