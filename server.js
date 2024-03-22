const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session"); // Import express-session
const crypto = require("crypto");
const userRoute = require("./Routes/authRoute");
const path = require("path");

const secret = crypto.randomBytes(64).toString("hex");
console.log(secret);

mongoose.connect(
  "mongodb+srv://divyashreesenthilkumar:9SsIDSVNiDppONUN@cluster123.9ohne5s.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("Database is connected");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Adding CORS middleware
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
  })
); // Use express-session middleware

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", userRoute);