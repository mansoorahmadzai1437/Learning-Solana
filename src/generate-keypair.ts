import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = Keypair.generate();

const keypair2 = getKeypairFromEnvironment("SECRET_KEY");

console.log("✅ Keypair generated!");
console.log(`The public key is ${keypair.publicKey}`);
console.log(`The secret key is ${keypair.secretKey}`);

console.log(
  `The public key loaded from an existing secret key in the .env file is ${keypair2.publicKey}`
);

console.log("✅ Finished!");
