"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
require("dotenv/config");
const helpers_1 = require("@solana-developers/helpers");
// Identify Keypairs
const senderKeypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY");
const recieverKeypair = (0, helpers_1.getKeypairFromEnvironment)("SECRET_KEY_2");
// Create Connection
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
console.log("✅ Loaded keypairs and established connection");
//Make Transaction
const transaction = new web3_js_1.Transaction();
const LAMPORTS_TO_SEND = 5000;
const sendSolInstruction = web3_js_1.SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: recieverKeypair.publicKey,
    lamports: LAMPORTS_TO_SEND,
});
transaction.add(sendSolInstruction);
let signature;
let toPubkey = recieverKeypair.publicKey.toBase58();
(async () => {
    signature = await (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
        senderKeypair,
    ]);
    console.log(`Transaction signature is ${signature}!`);
})();
console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `);
