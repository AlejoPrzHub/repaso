export class Point
{
    private x:number;
    private y:number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    }

    getX(){return this.x}
    getY(){return this.y}

    setX(newX:number):void{this.x = newX}
    setY(newY:number):void{this.y = newY}


    toString():string{return `(${this.x},${this.y})`}

    distanceToOrigin():number
    {
        let respuesta:number
        respuesta = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
        return respuesta
    }

    calculateDistance(anotherPoint:Point):number
    {
        let respuesta:number
        respuesta = Math.sqrt(Math.pow(anotherPoint.x-this.x,2) + Math.pow(anotherPoint.y-this.y,2))
        return respuesta
    }

    calcularQuadrant():number
    {
        let respuesta:number
        respuesta = 0
        if(this.x || this.y == 0){respuesta = 0}
        if(this.x && this.y > 0){respuesta = 1}
        if(this.x < 0 && this.y > 0){respuesta = 2}
        if(this.x && this.y < 0){respuesta = 3}
        if(this.x > 0 && this.y < 0){respuesta = 4}
        return respuesta
    }

    calcularNearest(points:Point[])
    {
        let nuevo = new Point(this.x,this.y)
        let respuesta = 0;

        for(let i= 0;i < points.length;i++)
        {
            respuesta = Math.min(points[i].calculateDistance(nuevo))
        }
        console.log(respuesta)
    }

}