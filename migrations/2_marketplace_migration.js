const MarketplaceMigration = artifacts.require("CourseMarketplace");

module.exports = function (deployer) {
  deployer.deploy(MarketplaceMigration);
};
