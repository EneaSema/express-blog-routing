// console.log("ciao");

const express = require("express");
const app = express();
const port = 3000;

const postRouter = require("./routers/posts.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Richiesta arrivata New");

  res.send("Server del mio blog");
});

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
