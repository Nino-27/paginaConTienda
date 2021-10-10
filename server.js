if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();// instead of the method load()...
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey);

const express = require('express');
const app = express(); //with express is like this. very different from the basic node js that is http.createServer(...)

app.set('view engine', 'ejs');
app.use(express.static('public'))// this function marked this folder's file as static and they gonna be avalible in the frond end 
const fs = require('fs');

app.get('/store', function(req, res){
    fs.readFile('items.json', function(error, data){
        if (error) {
            res.status(500).end();
        }else {
            res.render('store.ejs', {
                items: JSON.parse(data)
            })
        }
    })
});

app.listen(3000);