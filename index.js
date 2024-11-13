const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  return res.json({ msg: "Hello, world!" });
});

app.get("/docker", async (req, res) => {
  return res.json({ msg: "Hello, docker!" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
