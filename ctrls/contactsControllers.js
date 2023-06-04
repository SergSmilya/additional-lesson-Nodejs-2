const { getContacts, create } = require("../services/contactServices");

async function allContacts(req, res, next) {
  const result = await getContacts();
  res.json(result);
}

async function createContact(req, res, next) {
  const result = await create(req.body);
  res.status(201).json(result);
}

module.exports = { allContacts, createContact };
