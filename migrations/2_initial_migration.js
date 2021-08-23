var PNAToken = artifacts.require("./PNAToken.sol");
var PNATokenSale = artifacts.require("./PNATokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(PNAToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000;
    return deployer.deploy(PNATokenSale, PNAToken.address, tokenPrice);
  });
};