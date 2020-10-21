const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HeTtQImEgmfO9dxsYTv9vHitaqlfq2bW9QkRUzO89Uya2IlzyiJxbMiPY0GNF7sfaKMdWw8GarT0oxCjPZ9jTAf00I0kzR0bU');

// - App Config
const app = express();

// - Middlrwares
app.use(cors({ origin: true }))
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send('welcome'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment request received. Amount ->>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

