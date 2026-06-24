import User from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check user register
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already registered." });
    }

    // password hashing

    const hashPassword = await bcrypt.hash(password, 8);

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

export const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found." });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "forgot password." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login Successful.",
      token,
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "server error.", err });
  }
};
