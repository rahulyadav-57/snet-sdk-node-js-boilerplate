
import dotenv from "dotenv";
dotenv.config();

export const config = {
  "web3Provider": process.env.PROVIDER_HOST,
  "privateKey": process.env.PRIVATE_KEY,
  "signerPrivateKey": process.env.PRIVATE_KEY,
  "networkId": process.env.NETWORK_ID || 5,
  "ipfsEndpoint": process.env.IPFS_ENDPOINT || "http://ipfs.singularitynet.io:80",
  "defaultGasPrice": process.env.DEFAULT_GAS_PRICE || "4700000",
  "defaultGasLimit": process.env.DEFAULT_GAS_LIMIT || "210000"
}