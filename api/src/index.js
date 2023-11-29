const express = require('express');
const {port, host} = require("./configuration");
const {connectDB} = require('./utils/db');
const {User} = require('./models/user')

const app = express();

connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', startServer)

app.get("/test", (req, res) => {
    res.send('Server is working correctly');
});

function startServer() {
    app.listen(port, () => {
        console.log(`API-service is working on ${host}:${port}`);
    });
}

app.get('/',async (req,res) =>{
    res.send('Hello, world')
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json({users})
    } catch
        (err) {
        res.send({err})
    }
})

app.post('/users', async (req, res) =>{
    try {
        const user = new User({firstName: "Sasha", lastName: "Svistelnyk"})
        await user.save()
        res.json({user})
    } catch
        (err) {
        res.send({err})
    }
})