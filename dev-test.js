const Block = require('./block');


const firstblock = Block.mineBlock(Block.genesis(),'first');
console.log(firstblock.toString());
