import { IToken } from "../token";
import { Opcode } from "../opcode";
import { IExecutionContext, makeBytes } from "../context";
const { Keccak } = require("sha3");

export class Keccak256 extends Opcode {
    
    constructor(token: IToken) {
        super(token, 0, 1);
    }
    
    execute(context: IExecutionContext): void {
        const value = context.stack.pop()?.value as Uint8Array;
        const hash = new Keccak(256);
        hash.update(Buffer.from(value).toString('utf-8'));
        context.stack.push(makeBytes(Uint8Array.from(hash.digest())));
    }
}
