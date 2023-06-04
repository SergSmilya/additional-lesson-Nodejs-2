const mongoose = require("mongoose");

const { DB_HOST } = process.env;

async function mongooseConnect() {
  await mongoose.connect(DB_HOST);
}

module.exports = mongooseConnect;
