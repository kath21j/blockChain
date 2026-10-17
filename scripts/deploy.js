const hre = require("hardhat");
const fs = require("fs");

const NAME = process.env.CONTRACT_NAME || "YOUR NAME HERE";

async function main() {
  const Factory = await hre.ethers.getContractFactory("MyName");
  const contract = await Factory.deploy(NAME);
  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log(`${hre.network.name}: ${address}`);

  const file = "addresses.json";
  const data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : {};
  data[hre.network.name] = address;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
