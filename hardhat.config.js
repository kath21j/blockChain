require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia:         { url: "https://ethereum-sepolia-rpc.publicnode.com", accounts },
    polygonAmoy:     { url: "https://rpc-amoy.polygon.technology",        accounts },
    arbitrumSepolia: { url: "https://sepolia-rollup.arbitrum.io/rpc",     accounts },
    optimismSepolia: { url: "https://sepolia.optimism.io",                accounts },
    baseSepolia:     { url: "https://sepolia.base.org",                   accounts },
  },
};
