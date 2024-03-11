const companies = require('../data/companies.json')

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const batchImport = async () => {
    const client = new MongoClient(MONGO_URI)
    try{
        await client.connect();
        const db = client.db("ecomm");
        const result = await db.collection("companies").insertMany(companies)
    }catch(e){
        console.log(e)
        client.close()
    }
    client.close();
    console.log('Success!')
}

batchImport();