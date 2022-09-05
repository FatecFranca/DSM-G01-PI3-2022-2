const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("<mongodb+srv://admin:admin@cluster0.h9u45.mongodb.net/?retryWrites=true&w=majority>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
