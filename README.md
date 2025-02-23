```markdown
# 🏦 Collateralized Stablecoin dApp 🪙


## ✨ Welcome to the Future of Programmable Money! ✨

This project is a **Collateralized Stablecoin Decentralized Application (dApp)** built on the blazing-fast Solana blockchain! 🚀  It allows users to:

* 🔒 **Deposit SOL** as collateral.
*  mint 💰 **USDS stablecoins** against their collateral.
* 🔄 **Redeem SOL** by burning USDS.
* 🔥 Participate in **liquidation** of undercollateralized positions (if you dare!).
* 📊 Monitor their **risk level** in real-time! 📈📉

It's a simplified example to demonstrate the power of **programmable money** and **decentralized finance (DeFi)**.  Think of it as a mini-MakerDAO, but on Solana! 😎

## 🌐 Frontend - Dive into the UI!


This beautiful UI, built with Next.js and Tailwind CSS, lets you interact with the smart contract and manage your stablecoin positions. 🎨  Connect your wallet and start experimenting! 🚀

## ⚓️ Anchor Program - The Smart Contract Magic! 🧙‍♂️

This project is powered by a robust **Anchor program** (smart contract) written in Rust. Let's get it running locally!

### 🛠️ 1. Build the Program - Compile the Rust Sorcery!

```shell
cd program
anchor build
```

This command will compile your Rust code and prepare the program for deployment.  ✨ Watch the magic happen! ✨

### 🏃 2. Run Local Validator - Your Personal Solana Playground! 🏖️

```shell
solana-test-validator
```

Fire up the Solana Test Validator!  This creates a local blockchain environment perfect for development and testing. 🧪 Keep this running in a separate terminal window.

### 🚀 3. Deploy the Program Locally - Launch to Localnet! 🛰️

```shell
anchor deploy --provider.cluster localnet
```

Deploy your compiled program to your local Solana validator! 🚀 This makes your smart contract live and ready to interact with on your local network. 📡

**Important:** After deployment, make sure to:
    *  ✅ **Update `idl.json` in `frontend/anchor/`:** Copy the new `idl.json` from `program/target/idl/` to `frontend/anchor/` to ensure your frontend knows about the latest contract.
    *  🔄 **Restart Frontend:**  Restart your frontend (`npm run dev` in `frontend` directory) to pick up the updated `idl.json`.

### ✅ 4. Test - Put it to the Test! 🧪

```shell
anchor test
```

Run the automated tests! 🧪 These tests in `program/tests/stablecoin.ts` verify the core functionality of your smart contract.  Make sure all tests pass! 🎉

---

**Enjoy exploring the world of programmable money with this Collateralized Stablecoin dApp!** 🎉  Remember, this is just the beginning – the possibilities are endless! 🌌