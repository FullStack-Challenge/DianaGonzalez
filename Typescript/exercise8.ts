/*Exercise 8: Decorators

Write a decorator that logs the arguments and return value of a function when it's called.
Apply the decorator to a function and observe the logs when the function is executed.*/



interface Logger{
    log(message:string): void;
}

class ConsoleLogger implements Logger{
    public log(message:string): void{
        console.log(message)
    }
}

let logger:Logger;
class LoggerFactoy{
    public static getInstance():Logger{
        if(!logger){
            logger = new ConsoleLogger();
        }
        return logger;
    }
}

const logger_ = LoggerFactoy.getInstance();

function simpleLog(){
    return function(target: any, propertyKey: string){
        logger_.log(`Calling ${propertyKey}`)
    }
}

class Item {  
    itemArr: string[];  
    constructor() {  
        this.itemArr = [];  
    }  
    @simpleLog()  
    public add(item: string): string {  
       this.itemArr.push(item);  
       return "asda"
       }  
    public getAll(): string[] {  
       return this.itemArr;  
    }  
}  


const item = new Item();
item.add("hola");
