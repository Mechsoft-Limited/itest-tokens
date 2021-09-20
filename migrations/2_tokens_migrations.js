const totalSupply = 1000000;
const token1= artifacts.require("Token1");
const token2= artifacts.require("Token2");
const safeMath = artifacts.require("SafeMath");

module.exports = async function(deployer) {
  await deployer.deploy(safeMath);
  await deployer.link(safeMath, [token1, token2]);
  await deployer.deploy(token1, totalSupply);
  await deployer.deploy(token2, totalSupply);
}