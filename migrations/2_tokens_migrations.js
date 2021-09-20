const fs = require('fs');
const path = require('path');
const totalSupply = 1000000;
const token1= artifacts.require("Token1");
const token2= artifacts.require("Token2");
const safeMath = artifacts.require("SafeMath");

module.exports = async function(deployer) {
  await deployer.deploy(safeMath);
  await deployer.link(safeMath, [token1, token2]);
  await deployer.deploy(token1, totalSupply);
  await deployer.deploy(token2, totalSupply);

 const _token1 = await token1.deployed();
 const _token2 = await token2.deployed();
 fs.writeFileSync(path.join(__dirname,"../address1.txt"),_token1.address);
 fs.writeFileSync(path.join(__dirname,"../address2.txt"),_token2.address);

}