const express = require("express");

const {
  allContacts,
  createContact,
} = require("../../ctrls/contactsControllers");
const contactValidator = require("../../middlewares/validation/contactValidator");
const router = express.Router();

router.get("/", allContacts);

router.post("/", contactValidator, createContact);

router.delete("/:contactId");

router.put("/:contactId");

module.exports = router;
