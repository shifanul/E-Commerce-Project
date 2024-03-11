"use strict";

const express = require("express");
const morgan = require("morgan");

const { getWatches } = require("./restHandlers/getWatches");
const { getWatch } = require("./restHandlers/getWatch");

const { getCompanies } = require("./restHandlers/getCompanies");
const { getSingleCompany } = require("./restHandlers/getSingleCompany");

const { addWatch } = require("./restHandlers/addWatch");
const { getCart } = require("./restHandlers/getCart");

const { deleteItemFromCart } = require("./restHandlers/deleteItemFromCart");
const { purchaseCart } = require("./restHandlers/purchaseCart");

const { postNewOrder } = require("./restHandlers/postNewOrder");
const { getOrder } = require("./restHandlers/getOrder");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST ENDPOINTS

  //WATCH ENDPOINTS
  .get("/api/get-watches", getWatches)
  .get("/api/get-watch/:watch", getWatch)

  //COMPANY ENDPOINTS
  .get("/api/get-companies", getCompanies)
  .get("/api/get-company/:companyId", getSingleCompany)

  //CART ENDPOINTS
  .post("/api/add-to-cart", addWatch)
  .get("/api/get-cart", getCart)

  .delete("/api/delete-item/:itemId", deleteItemFromCart)
  .delete("/api/purchase-cart", purchaseCart)

  //Order Endpoinys

  .post('/api/new-order', postNewOrder)
  .get('/api/get-order/:orderId', getOrder)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
    // res.send("error 404")
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
