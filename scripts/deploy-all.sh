#!/usr/bin/env bash
set -e
for n in sepolia polygonAmoy arbitrumSepolia optimismSepolia baseSepolia; do
  echo "Deploying to $n..."
  npx hardhat run scripts/deploy.js --network $n
done
echo "Done. Addresses:"
cat addresses.json
