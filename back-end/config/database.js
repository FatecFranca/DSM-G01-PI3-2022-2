const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("<uri>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
