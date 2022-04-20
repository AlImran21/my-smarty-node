const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Code is run YAY!! again code is running YAY!! more code is running YAY!! YAY!!');
});

const users = [
    { id: 1, name: 'Babar', email: 'babar@paki.cricket', phone: '+25145870' },
    { id: 2, name: 'Sahin', email: 'Sahin@paki.cricket', phone: '+5698745' },
    { id: 3, name: 'Rizwan', email: 'Rizwan@paki.cricket', phone: '+245987754' },
    { id: 4, name: 'Rauf', email: 'Rauf@paki.cricket', phone: '+8456845' },
    { id: 5, name: 'Hasan', email: 'Hasan@paki.cricket', phone: '+8754612' },
    { id: 6, name: 'Amir', email: 'Amir@paki.cricket', phone: '+257489895' },
    { id: 7, name: 'Fakhar', email: 'Fakhar@paki.cricket', phone: '+2548778' },
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'jackfruit', 'banana', 'litchi'])
})

app.listen(port, () => {
    console.log('Listening to port', port);
})