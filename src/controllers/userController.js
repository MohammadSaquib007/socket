const userModel = require('../models/userModel');

module.exports = {
  userRegistration: async function(req, res) {
    try {
      const data = req.body;
      const createUser = await userModel.create(data);
      res.status(201).send({ status: true, message: "user registration successfully", data: createUser });
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  },

  getUser: async function(req, res) {
    try {
      let id = req.query.id;
      if (id) {
        const fetchUser = await userModel.find({ _id: id });
        console.log(fetchUser);
        res.status(200).send({ status: true, message: fetchUser });
      } else {
        const getUsers = await userModel.find();
        res.status(200).send({ status: true, message: getUsers });
      }
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  }
};
