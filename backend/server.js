const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models");
const Role = db.role;

db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:8081",
};

app.get("/", (req, res) => {
  res.json({ message: "Welcome to San3ti application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
