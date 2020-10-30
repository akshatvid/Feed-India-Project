var mongoose = require("mongoose");
var informationSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  mobile: String,
  area: String,
  informa: String,
});
module.exports = mongoose.model("Information", informationSchema);
