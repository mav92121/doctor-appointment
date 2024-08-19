import User from "../models/userModels.js";
import Doctor from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const userLoginSuccess = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded -> ", decoded);
    const userId = decoded.id;
    console.log("user -> ", userId);

    const user = await User.findById(userId).select("-password");
    console.log("user ", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const applyDoctorAccount = async (req, res) => {
  try {
    console.log("req ", req.body);
    const adminUser = await User.findOne({ is_admin: true });
    const newDoctor = await Doctor.create(req.body);
    newDoctor.save();
    adminUser.unseen_notifications.push({
      name: `${newDoctor?.first_name} want's to add a new doctor`,
      details: newDoctor,
    });
    adminUser.save();
    res.send(newDoctor);
  } catch (e) {
    console.log("err ", e);
    res.send("something went wrong");
  }
};
