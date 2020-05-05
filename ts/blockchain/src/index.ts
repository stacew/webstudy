//tsconfig.js noImplicitAny true세팅해서 crypto-js가 any타입 모듈이라고 index.d.ts파일 추가 후 정의해줌
/// <reference path="index.d.ts"/>
import * as CryptoJS from "crypto-js";


class Block {
    public index: number;
    public hash: string;
    public preHash: string;
    public data: string;
    public timeStamp: number;

    static calculateBlockHash(index: number, preHash: string, timeStamp: number, data: string): string {
        return CryptoJS.SHA256(index + preHash + timeStamp + data).toString();
    }

    static validateStructure(aBlock: Block): boolean {
        return typeof aBlock.index === "number"
            && typeof aBlock.hash === "string"
            && typeof aBlock.preHash === "string"
            && typeof aBlock.timeStamp === "number"
            && typeof aBlock.data === "string"
    }

    constructor(index: number, hash: string, preHash: string, data: string, timeStamp: number) {
        this.index = index; this.hash = hash; this.preHash = preHash; this.data = data; this.timeStamp = timeStamp;
    }
}

const genesisBlock: Block = new Block(0, "202020202020202", "", "Hello World", 123456);
let blockChain: [Block] = [genesisBlock];

function getBlockChain(): Block[] { return blockChain; }
function getLastBlock(): Block { return blockChain[blockChain.length - 1]; }
function getNewTimeStamp(): number { return Math.round(new Date().getTime() / 1000); }
function createNewBlock(data: string): Block {
    const preBlock: Block = getLastBlock();
    const newIndex: number = preBlock.index + 1;
    const nextTimeStamp: number = getNewTimeStamp();
    const nextHash: string = Block.calculateBlockHash(newIndex, preBlock.hash, nextTimeStamp, data);
    const newBlock: Block = new Block(newIndex, nextHash, preBlock.hash, data, nextTimeStamp);
    addBlock(newBlock);
    return newBlock;
}
function getHashForBlock(aBlock: Block): string {
    return Block.calculateBlockHash(aBlock.index, aBlock.preHash, aBlock.timeStamp, aBlock.data);
}

function isBlockValid(candidateBlock: Block, preBlock: Block): boolean {
    if (!Block.validateStructure(preBlock)) {
        return false;
    } else if (preBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if (preBlock.hash !== candidateBlock.preHash) {
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    return true;
}

function addBlock(candidateBlock: Block): void {
    if (isBlockValid(candidateBlock, getLastBlock()))
        blockChain.push(candidateBlock);
}

console.log(createNewBlock("hello1"));
console.log(createNewBlock("hello2"));
console.log(createNewBlock("hello3"));
console.log(createNewBlock("hello4"));
console.log(createNewBlock("hello5"));
console.log(createNewBlock("hello6"));
console.log(createNewBlock("hello7"));
console.log(createNewBlock("hello8"));


export { };