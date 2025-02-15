import User from "./user.schema.js";

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

export default new UserRepository();
