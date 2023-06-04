const { Schema, model } = require("mongoose");

const contact = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
  },
  { versionKey: false }
);

const Contact = model("contact", contact);

module.exports = Contact;
