var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w',
        title: 'Star Trek',
        description: 'Star Trek Movie',
        price: 10
    }),
    new Product({
        imagePath: 'http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w',
        title: 'Star Trek',
        description: 'Star Trek Movie',
        price: 10
    }),
    new Product({
        imagePath: 'http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w',
        title: 'Star Trek',
        description: 'Star Trek Movie',
        price: 10
    }),
    new Product({
        imagePath: 'http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w',
        title: 'Star Trek',
        description: 'Star Trek Movie',
        price: 10
    }),
    new Product({
        imagePath: 'http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w',
        title: 'Star Trek',
        description: 'Star Trek Movie',
        price: 10
    })
];
var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done ++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}