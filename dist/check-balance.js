"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
const address = new web3_js_1.PublicKey("8pEEkbH3kY9WT2aeirhUe2VhdKQxq3syFVHdQWZbHu2a");
(async () => {
    const balance = await connection.getBalance(address);
    const balanceInSOL = balance / web3_js_1.LAMPORTS_PER_SOL;
    console.log(`💰 Finished! The balance for the wallet at address ${address.toBase58()} is ${balanceInSOL}!`);
})();
