const { MongoClient } = require("mongodb");
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getSingleCompany = async (req, res) => {
  
  const client = new MongoClient(MONGO_URI, options);
  const company = Number(req.params.companyId);
  try {
    await client.connect();
    const db = client.db("ecomm");
    const result = await db.collection("companies").findOne({ _id: company });

    result
      ? res.status(200).json({ status: 200, data: result })
      : res
          .status(400)
          .json({ status: 400, Error: "Company not found.", data: company });
  } catch (e) {
    res.status(500).json({ status: 500, Error: e });
  }

  client.close();

};

module.exports = { getSingleCompany };
