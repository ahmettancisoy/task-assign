const providerTR = require("../services/api-providers/providerTR");
const providerEN = require("../services/api-providers/providerEN");
const getData = require("../services/getProvidersData");

const insertTask = async (req, res) => {
  const { provider, providerUrl } = req.body;
  const trimmedUrl = providerUrl.trim();
  if (provider === "EN") {
    getData(await providerEN(trimmedUrl), res);
  } else if (provider === "TR") {
    getData(await providerTR(trimmedUrl), res);
  }
};

module.exports = { insertTask };
