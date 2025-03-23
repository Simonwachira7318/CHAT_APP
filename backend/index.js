const express = require("express");
const cors = require("cors");
// https://www.youtube.com/watch?v=Fzv-rgwcFKk

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "#Pass004" });
});

app.listen(3001);
