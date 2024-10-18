
export class TransactionException extends Error {
    
    public code: number;

    constructor(message: string, code: number = 500) {
        super(message);
        this.name = "CustomError";
        this.code = code;
        
    }
    
}