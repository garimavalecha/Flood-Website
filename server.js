const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api-routes");

mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongodb connected!");
});

app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(3001, function() {
  console.log("Your app is listening on port 3000");
});
