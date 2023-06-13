const express = require("express");
const app = express();
const path = require("path");
const taoRouter = require("./routes/tao.router");
const messagesRouter = require("./routes/messages.router");

const port = 4000;

app.use((req, res, next) => {
  const start = Date.now();

  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    caption: "This is a caption",
  });
});
app.use("/tao", taoRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
