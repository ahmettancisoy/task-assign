const providerTR = require("../services/api-providers/providerTR");
const providerEN = require("../services/api-providers/providerEN");
const getData = require("../services/getProvidersData");

const insertTask = async (req, res) => {
  const { provider, providerUrl } = req.body;
  if (provider === "EN") {
    getData(await providerEN(providerUrl));
  } else if (provider === "TR") {
    getData(await providerTR(providerUrl));
  }

  res.status(204).send();
};

module.exports = { insertTask };
