require('dotenv').config();

const express= require('express');
const app= express();
const port= process.env.PORT;

app.use (express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

app.post ('/details', (req, res) => {
    console.log(`Hello ${req.body.name}!`);
    res.json({echoed: req.body});
});

app.get ('/info', (req, res) => {
    res.send('MY WEEK 2 API!');
});

app.get ('/user/:id', (req, res) => {
    const id= req.params.id;
    console.log(`user id ${id}`);
    res.send(id); 
});


app.listen(port, () => {
    console.log(`its going on ${port}`);
});
