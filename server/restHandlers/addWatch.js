// ADD A WATCH TO CART

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const addWatch = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    const db = client.db("ecomm");
    let result = "";
    console.log("connected!");

    const _id = Number(req.body._id);
    const quantity = Number(req.body.quantity);

    const findItem = await db.collection("items").findOne({ _id: _id });
    const alreadyInCart = await db.collection("cart").findOne({ _id: _id });
    
    // VERIFY IF ITS ALREADY IN THE CART, IF SO, INCREMENT QUANTITY ONLY
    if (alreadyInCart) {
      const newQuantity = {
        $set: { quantity: alreadyInCart.quantity + quantity },
      };
      result = await db.collection("cart").updateOne({ _id: _id }, newQuantity);
    } else {
      result = await db
        .collection("cart")
        .insertOne({ ...findItem, quantity: quantity });
    }
    
    result
      ? res.status(200).json({
          status: 200,
          message: "Added to cart:",
          data: result,
        })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "Couldn't add selected item to cart.",
        });

    client.close();
    console.log("disconnected!");
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
};

module.exports = { addWatch };
