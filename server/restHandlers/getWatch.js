// GET A SPECIFIC WATCH

const getWatch = async (req, res) => {
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
    const watch = Number(req.params.watch);
    // FIND THE REQUESTED WATCH BY _ID
    const result = await db.collection("items").findOne({ _id: watch });
    
    result
      ? res
          .status(200)
          .json({ status: 200, message: "Found watch:", data: result })
      : res.status(404).json({
          status: 404,
          data: "You sent: " + req,
          message: "Watch not found.",
        });
  } catch (e) {
    console.log(e);
    client.close();
    console.log("disconnected!");
  }
  client.close();
  console.log("disconnected!");
};

module.exports = { getWatch };
