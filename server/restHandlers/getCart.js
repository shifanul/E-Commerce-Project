const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getCart = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const db = client.db("ecomm");
    console.log("connected!");

    const cart = await db.collection("cart").find().toArray();

    cart
      ? res.status(200).json({
          status: 200,
          message: "Cart:",
          data: cart,
        })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "Couldn't find cart items.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { getCart };
