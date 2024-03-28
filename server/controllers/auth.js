import User from "../models/auth.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      try {
        const newUser = await User.create({ email });
        const token = jwt.sign(
          {
            email: newUser.email,
            id: newUser._id,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ result: newUser, token });
      } catch (error) {
        res.status(500).json({ mess: "something wents wrong..." });
      }
    } else {
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    res.status(500).json({ mess: "something wents wrong..." });
  }
};
