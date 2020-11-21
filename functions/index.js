const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HeTtQImEgmfO9dxsYTv9vHitaqlfq2bW9QkRUzO89Uya2IlzyiJxbMiPY0GNF7sfaKMdWw8GarT0oxCjPZ9jTAf00I0kzR0bU"
);

// - App Config
const app = express();

// - Middlrwares
app.use(cors());
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("welcome"));

app.post("/payments/create/:total", async (req, res) => {
    
    if (req.params.total > 0) {
        // only accept  integer
    const total = parseFloat(req.params.total).toFixed(0);
    console.log("Payment request received. Amount ->>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(201).send({
        clientSecret: 'no session id',
      })
  }
});

// - Listen Command
exports.amazonStripeApi = functions.https.onRequest(app);
