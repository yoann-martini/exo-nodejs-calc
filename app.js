let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let ejs = require('ejs');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser());
// app.use(bodyParser.urlencoded());

// Setup serveur local
let port = 3000;
app.listen(port, () => {
    console.log('Server started on port http://localhost:' + port + '/');
});

app.get('/', function (req, res) {
    var resultat = '0';
    res.render('index', {
        resultat: resultat
    });
});

app.post('/calculate', function (req, res) {
    var chiffre1 = Number(req.body.chiffre1);
    var chiffre2 = Number(req.body.chiffre2);
    var resultat;
    // let resultat = 0;
    switch (req.body.signe) {
        case "+":
            resultat = chiffre1 + chiffre2;
            break;
        case "-":
            resultat = chiffre1 - chiffre2;
            break;
        case "*":
            resultat = chiffre1 * chiffre2;
            break;
        case "/":
            resultat = chiffre1 / chiffre2;
            break;
        default:
            error = "veuillez sélectionner un opérateur";
            break;

    }


    console.log(resultat)
    res.render('index', {
        resultat: resultat,
        error: error,
    });
});