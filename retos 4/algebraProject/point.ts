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

    distanceToOrigin():number{}
}