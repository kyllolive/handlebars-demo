const TaoModel = require("../models/tao.model");

function postTao(req, res) {
  if (!req.body.name) {
    //important to return, otherwise it will continue to run
    return res.status(400).json({
      error: "Missing name",
    });
  }

  const newTao = {
    name: req.body.name,
    id: TaoModel.length,
  };

  TaoModel.push(newTao);

  res.status(200).json(newTao);
}

function getTao(req, res) {
  res.status(200).json(TaoModel);
}

function getOneTao(req, res) {
  const taoId = Number(req.params.id);
  const taoPerson = TaoModel[taoId];

  if (taoPerson) {
    res.send(taoPerson);
  } else {
    res.status(404).send("Not found");
  }
}

module.exports = {
  postTao,
  getTao,
  getOneTao,
};
