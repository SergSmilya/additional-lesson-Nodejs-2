const Contact = require("../db/models/contactModel");

async function getContacts() {
  return await Contact.find();
}

async function create(data) {
  return await Contact.create(data);
}

module.exports = { getContacts, create };
