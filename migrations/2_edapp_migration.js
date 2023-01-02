const edapp = artifacts.require("Edapp");

module.exports = function (deployer) {
  deployer.deploy(edapp);
};
