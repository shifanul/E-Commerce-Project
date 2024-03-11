const { MongoClient } = require("mongodb");
require('dotenv').config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };


const deleteItemFromCart = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options)
    const id = parseInt(req.params.itemId);

    try{
      await client.connect();
      const db = client.db("ecomm");
      const result = await db.collection("cart").find({_id: id})
      if(!result){throw "Watch not found."}
      const deleteItem = await db.collection("cart").deleteOne({_id:id}) 
      
      deleteItem.deletedCount
      ?
      res.status(200).json({ status: 200, Message: 'Deleted from cart.' }):
      res.status(404).json({ status: 404, Message: 'Couldn`t delete item from cart.' });

    }catch(e) {
      res.status(500).json({ status: 500, Error: e });
    }
    
  };
  
  
  module.exports = { deleteItemFromCart };
  