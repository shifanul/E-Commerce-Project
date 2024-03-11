const { MongoClient } = require("mongodb");
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getOrder = async (req, res) => {
  
  const client = new MongoClient(MONGO_URI, options);
  const order = String(req.params.orderId);
  console.log(order)
  try {
    await client.connect();
    const db = client.db("ecomm");
    const result = await db.collection("orders").findOne({ _id: order });

    result
      ? res.status(200).json({ status: 200, data: result })
      : res
          .status(400)
          .json({ status: 400, Error: "Order not found.", data: order });
  } catch (e) {
    res.status(500).json({ status: 500, Error: e });
  }

  client.close();

};

module.exports = { getOrder };