const path = require("path");

function getMessages(req, res) {
  // res.sendFile(path.join(__dirname, "..", "public", "images", "testimage.png"));
  // res.status(200).send("<ul><li>Message 1</li><li>Message 2</li></ul>");
  res.render("messages", {
    title: "Messages to the Universe",
    friend: "Elon Musk",
  });
}

function postMessage(req, res) {
  console.log("Updating message");
  res.status(200).send("Message posted");
}

module.exports = {
  getMessages,
  postMessage,
};
