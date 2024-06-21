const mongoose = require("mongoose")

const viwerschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']    // enumaration : if the value is out of the given value throws the error
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  });

const viewer = mongoose.model('viewer', viwerschema);     // model contains 2 arguments (collection name, schema)

module.exports = viewer;