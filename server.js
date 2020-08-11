const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
require("dotenv").config(); // loads variables from .env file
const mongoose = require("mongoose");
const path = require("path");
const users = require("./routes/api/users");
const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//

//Database Configuration
const ATLAS_URI = process.env.ATLAS_URI;
mongoose
  .connect(ATLAS_URI, { useNewUrlParser: true })
  .then(() => console.log("Connection to MongoDB was successful!"))
  .catch((err) => console.log("error"));

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
//

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users/", users);
app.use("/api/posts/", require("./routes/api/posts"));

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
