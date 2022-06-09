const Migrations = artifacts.require('Migrations');
const NFT = artifacts.require('NFT.sol'); // NFT.sol 파일 추가

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(NFT); // NFT를 배포에 추가
};