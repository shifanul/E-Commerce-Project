const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const purchaseCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("ecomm");
    const cartItems = await db.collection("cart").find().toArray();
    console.log('Empty', cartItems)
    if (!cartItems.length) {
      throw "Cart is empty";
    }


    const outOfStock = cartItems.map( async (item) => {
      const id = item._id;
      const quantity = item.quantity;
      const dbWatch = await db.collection("items").findOne({ _id: id });
      return quantity > dbWatch.numInStock;
    })

    const promAll = await Promise.all(outOfStock);

    if(promAll.includes(true)){
       throw "Unable to purchase. Item out of stock."
     }


    //Change the stock
    cartItems.forEach(async (item) => {
      const id = item._id;
      const quantity = item.quantity;
      const newInventory = item.numInStock - quantity;
      const update = await db
        .collection("items")
        .updateOne({ _id: id }, { $set: { numInStock: newInventory } });

      const deleteItem = await db.collection("cart").deleteOne({ _id: id });
    });



    res.status(200).json({ status: 200, Message: "Purchase Successful!" });
  } catch (e) {
    res.status(500).json({ status: 500, Error: e });
  }
};

module.exports = { purchaseCart };
