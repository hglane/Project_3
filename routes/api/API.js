
const mongoose = require("mongoose");
const db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "fill in";

mongoose.connect(MONGODB_URI,{  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = function (app) {
  
};
