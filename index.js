

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'secret';

mongoose.connect('mongodb+srv://adm:adm@cluster0.wwahw.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', {
    username: String,
    password: String
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save()
        .then(() => {
            const payload = { username };
            const token = jwt.sign(payload, secretKey, { expiresIn: '100000000000h' });
            res.send({ token })
        })
        .catch((err) => {
            res.status(500).send('Error registering new user please try again. ' + err);``
        });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                res.status(401).send('Invalid credentials.');
            } else {
                if (password !== user.password) {
                    res.status(401).send('Invalid credentials.');
                } else {
                    const payload = { username };
                    const token = jwt.sign(payload, secretKey, { expiresIn: '100000000000h' });
                    res.send({ token });
                }
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error on the server.');
        });
});

app.get('/protected', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                res.status(200).send('Welcome to the protected area!');
            }
        });
    }
});

app.listen(port, () => console.log(`Server is listening on port ${port}.`));
