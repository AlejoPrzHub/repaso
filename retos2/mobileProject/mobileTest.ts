import { Mobile } from "./mobile";

let a50 = new Mobile("A50","Samsung","premiun","grey",400);
let a72 = new Mobile("A72","Samsung","5G","black",500);
let a100 = new Mobile("A100","Samsung","premiun+","white",1000);
let myMobiles =[a50,a72,a100];

console.log(a50.getColor());
console.log(a50.getName());
console.log(a50.getModel());
console.log(a50.getTradeMark());
console.log(a50.getPrice());

a50.setName("A52");
a50.setColor("red");
a50.setModel("normal");
a50.setTradeMark("chanchun");
a50.setPrice(199);


for(let i = 0;i<myMobiles.length;i++)
{myMobiles[i].printAll()}






