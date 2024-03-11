// FIND ALL OF THE WATCHES 

const getWatches = async (req, res) => {
  const { MongoClient } = require("mongodb");
  require("dotenv").config();
  const { MONGO_URI } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const db = client.db("ecomm");
    console.log("connected!");

    // FIND ALL WATCHES IN MONGO
    const result = await db.collection("items").find().toArray();
    
    result
      ? res.status(200).json({ status: 200, message:"All of the watches:",  data: result })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "No watches found.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
  client.close();
  console.log("disconnected!");
};

module.exports = { getWatches };
