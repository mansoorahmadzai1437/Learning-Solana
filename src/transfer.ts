import {
  Connection,
  Transaction,
  SystemProgram,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// Identify Keypairs

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

const recieverKeypair = getKeypairFromEnvironment("SECRET_KEY_2");

// Create Connection

const connection = new Connection(clusterApiUrl("devnet"));

console.log("✅ Loaded keypairs and established connection");

//Make Transaction

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey: recieverKeypair.publicKey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

let signature;
let toPubkey = recieverKeypair.publicKey.toBase58();

(async () => {
  signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);
  console.log(`Transaction signature is ${signature}!`);
})();

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
