const BlockChain = require('./core/blockchain');
const Block = require('./core/block');

BlockChain.addBlock(new Block(1, { amount: '5$' }));
BlockChain.addBlock(new Block(2, { amount: '8$' }));
BlockChain.addBlock(new Block(3, { amount: '2$' }));
BlockChain.addBlock(new Block(4, { amount: '10$' }));
BlockChain.addBlock(new Block(5, { amount: '10000$' }));
