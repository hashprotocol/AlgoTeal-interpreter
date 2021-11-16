import { IExecutionContext } from "../context";
import { Binary } from "./binary-operator";

export class Lt extends Binary {
    
    execute(context: IExecutionContext): void {
        this.pushInt(context, this.a < this.b ? BigInt(1) : BigInt(0));
    }
}
