const mongoose = require("mongoose");
let url = URL.toString();
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.url)
  .then(() => console.log("DB CONECTADA!"))
  .catch((e) => console.log("DB FALLADA!" + e));
