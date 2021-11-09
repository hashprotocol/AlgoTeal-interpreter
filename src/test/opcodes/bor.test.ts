import { makeBigInt } from "../../lib/context";
import { Bor } from "../../lib/opcodes/bor";

describe("bitwise or opcode", () => {

    it ("can execute", () => {

        const token: any = {
            opcode: "|",
            operands: [],
            
        };
        const context: any = {
            stack: [
                makeBigInt(BigInt(1)), 
                makeBigInt(BigInt(3)),
            ],
        };
        const opcode = new Bor(token);
        opcode.validateContext(context);
        opcode.execute(context);

        expect(context.stack.length).toEqual(1);
        expect(Number(context.stack[0]?.value)).toEqual(3);
    });
});