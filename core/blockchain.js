const Block = require('./block');

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficalty = 4;
    }

    createGenesisBlock() {
        return new Block(0, 'Genesis Block', '0');
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficalty);

        this.chain.push(newBlock);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }

}

module.exports = new Blockchain();
