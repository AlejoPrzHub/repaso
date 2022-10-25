import { Mobile } from "./mobile"
export class mobileCollection 
{
    private mobiles:Mobile[]
    private totalPrice:number

    constructor(mobiles:Mobile[])
    {
        this.mobiles = []
        this.totalPrice = 0
        
    }

    getMobiles()
    {
        for (let i = 0; i<this.mobiles.length ; i++)
        {
            this.mobiles[i].getName()
        }
    }

    getTotalPrice()
    {
        let resultado = 0
        for(let i = 0; i<this.mobiles.length; i++)
        {
            resultado += this.mobiles[i].getPrice()
        }
        return resultado
    }
    
    setMobiles(newMobiles:Mobile[]){this.mobiles = newMobiles};
    setTotalPrice(newTotalPrice:number){this.totalPrice = newTotalPrice};

    private totalPriceCalculation()
    {
        let resultado = 0
        for(let i = 0; i<this.mobiles.length; i++)
        {
            resultado += this.mobiles[i].getPrice()
        }
        return resultado
    }

    public printCollection()
    {
        for (let i = 0; i<this.mobiles.length ; i++)
    {
        this.mobiles[i].printAll()
    }
        console.log("Price overall - " + this.getTotalPrice());   
    }

}