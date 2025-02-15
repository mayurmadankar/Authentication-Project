import bcrypt from "bcryptjs";
import userRepository from "./user.repository.js";

class UserController {
  async registerUser(req, res) {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await userRepository.findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create user (Password is hashed in pre-save hook)
      const newUser = await userRepository.createUser({
        name,
        email,
        password
      });

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
}

export default new UserController();
