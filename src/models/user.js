const { getJSON, saveJSON } = require("../utils/fileHelpers");

class User {
  constructor() {
    this.saveData = saveJSON;
    this.fetchData = getJSON;
  }

  async find(id) {
    _users = this.fetchData()
    return _users.find(u => u.id === id);
    // fetch the users
    // found the users
    //   if found return the user
    //   if not found return Promise.reject(new Error(`User with id ${id} not found`));
  }

  async create(user) {
    const newUser = {
      id: user.id,
      name: user.displayName,
      email: user.emails[0].value,
      imageUrl: user.photos[0].value
    };
    saveJSON(newUser)
    return newUser
  }
}

module.exports = new User();
