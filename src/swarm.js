// const swarmSetup = {
//     dataDir: process.env.HOME + "/Library/Ethereum/testnet",
//     ensApi: process.env.HOME + "/Library/Ethereum/testnet/geth.ipc",
//     binPath: process.env.HOME + "/Library/Ethereum/swarm"
// };
const swarm = require('swarm-js').at("http://127.0.0.1:8500");

export default swarm;