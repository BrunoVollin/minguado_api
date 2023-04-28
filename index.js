const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'secret';

app.use(cors());
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

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        const payload = { username };
        const token = jwt.sign(payload, secretKey, { expiresIn: '100000000000h' });
        res.send(token);
    } catch (err) {
        res.status(500).send('Error registering new user please try again. ' + err);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            res.status(401).send('Invalid credentials.');
            return;
        }
        if (password !== user.password) {
            res.status(401).send('Invalid credentials.');
            return;
        }
        const payload = { username };
        const token = jwt.sign(payload, secretKey, { expiresIn: '100000000000h' });
        res.send(token);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error on the server.');
    }
});

app.get('/protected', async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).send('Unauthorized: No token provided');
            return;
        }
        const decoded = jwt.verify(token, secretKey);
        res.status(200).send('Welcome to the protected area!');
    } catch (err) {
        res.status(401).send('Unauthorized: Invalid token');
    }
});

app.listen(port, () => console.log(`Server is listening on port ${port}.`));
