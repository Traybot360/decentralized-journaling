const Journal = artifacts.require("Journal");

module.exports = function(deployer) {
  deployer.deploy(Journal);
};
