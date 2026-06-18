import User from "../models/auth.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check user register
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400).json({ message: "User already registered." });
    }

    // password hashing

    const hashPassword = await bcrypt.hash("password", 8);

    // create user

    await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.send({
      message: "Successfully register.",
    });
  } catch (err) {
    res.status(500).json({ message: "server error.", err });
  }
};
