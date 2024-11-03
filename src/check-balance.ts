import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const address = new PublicKey("8pEEkbH3kY9WT2aeirhUe2VhdKQxq3syFVHdQWZbHu2a");

(async () => {
  const balance = await connection.getBalance(address);
  const balanceInSOL = balance / LAMPORTS_PER_SOL;
  console.log(
    `💰 Finished! The balance for the wallet at address ${address.toBase58()} is ${balanceInSOL}!`
  );
})();
