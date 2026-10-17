# MyName contract: multi-chain deploy

Stores a name in a variable and deploys it to 5 EVM testnets:
Sepolia, Polygon Amoy, Arbitrum Sepolia, Optimism Sepolia, Base Sepolia.

## Quick start
1. `npm install`
2. `cp .env.example .env` and set `PRIVATE_KEY` (fresh test wallet only) and `CONTRACT_NAME`
3. Get test coins for that wallet from each chain's faucet
4. `npm run compile`
5. `npm run deploy:all`
6. Addresses are saved to `addresses.json`

Never commit `.env` or use a key from a wallet holding real funds.
