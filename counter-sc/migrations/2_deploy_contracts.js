const Counter = artifacts.require("../contracts/Counter.sol");

module.exports = function (deployer) {
  deployer.deploy(Counter);
};
