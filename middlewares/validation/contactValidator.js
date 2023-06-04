const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().min(7).required(),
});

const fields = ["name", "number"];

function contactValidator(req, res, next) {
  //   if (!Object.keys(req.body)) {
  //     res.status(400).json({ message: "Bad request" });
  //     return;
  //   }

  for (const field of fields) {
    if (req.body[field] === undefined) {
      res.status(400).json({ message: `Field ${field}  must be filled` });
      return;
    }
  }

  const { error } = contactSchema.validate(req.body);
  console.log(contactSchema.validate(req.body));
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  next();
}

module.exports = contactValidator;
