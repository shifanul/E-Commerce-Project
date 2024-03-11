const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const createCartCollection = async (req, res) => {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const db = client.db("ecomm");
    const response = await db.createCollection("cart");

    client.close();
    console.log("Collection created!");
    console.log("disconnected!");
  } catch (e) {
    console.log("Error creating collection: ", e);
    client.close();
  }
};

createCartCollection();
