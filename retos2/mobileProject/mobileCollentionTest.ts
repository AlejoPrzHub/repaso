import { mobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let a50 = new Mobile("A50","Samsung","premiun","grey",400);
let a72 = new Mobile("A72","Samsung","5G","black",500);
let a100 = new Mobile("A100","Samsung","premiun+","white",1000);
let a500 = new Mobile("A500","LG","alpha","blue",1500)



let myCollection = new mobileCollection([a100,a50,a500,a72])

myCollection.getMobiles();
myCollection.getTotalPrice();
myCollection.setTotalPrice(5000);
myCollection.setMobiles([a500,a100]);


myCollection.printCollection();