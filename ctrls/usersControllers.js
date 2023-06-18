const userModel = require("../db/models/userModel");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

async function signup(req, res, next) {
  try {
    const { email, password, name } = req.body;

    const findEmail = await userModel.findOne({ email });
    if (findEmail) {
      res.status(409).json({ message: "This email inuse" });
      return;
    }

    const avatar = gravatar.url(email);

    const newUser = new userModel({ name, email, password, avatar });

    await newUser.hashPassword(password);

    await newUser.save();

    const payload = { id: newUser._id };

    const token = jwt.sign(payload, SECRET_KEY);

    await userModel.findByIdAndUpdate(newUser._id, { token });

    res.status(201).json({ user: { name, email, avatar }, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { signup };
