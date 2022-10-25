export class Mobile
{
    private name:string;
    private trademark:string;
    private model:string;
    private color:string;
    private price:number;

    constructor(name:string,trademark:string,model:string,color:string,price:number)
    {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    getName(){return this.name};
    getTradeMark(){return this.trademark};
    getModel(){return this.model};
    getColor(){return this.color};
    getPrice(){return this.price};

    setName(newName:string):void{this.name = newName};
    setTradeMark(newTradeMark:string):void{this.trademark = newTradeMark};
    setModel(newModel:string):void{this.model = newModel};
    setColor(newColor:string):void{this.color = newColor};
    setPrice(newPrice:number):void{this.price = newPrice};

    printAll()
    {
        let respuesta:string
        respuesta = "The characteristics of the mobile are " + `\n` + "*Name: " + this.name + `\n` + "*Trademark: " + this.trademark + `\n` + "*Model: " + this.model + `\n` + "*Color: " + this.color + `\n` + "*Price: " + this.price
        console.log(respuesta) 
    }



}