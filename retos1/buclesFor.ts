function evenNumbers(num:number)
{
    for(let i=0 ; i<=num ; i++)
    {
        let numero:number[];
        numero= [];

        if(i % 2 !=0){numero.push(i)};
        console.log (numero);
    }
}
//evenNumbers(100);

function myRevert(myArr:number[])
{
    let longitudDelArreglo = myArr.length;

    for (let x = 0; x < longitudDelArreglo / 2; x++) 
    { 
        let temporal = myArr[x];
        let indiceContrario = longitudDelArreglo - x - 1;
        myArr[x] = myArr[indiceContrario];
        myArr[indiceContrario] = temporal;
    }   
    console.log(myArr)
}
//myRevert([2,5,7,8,10])

function isRainbow(colors:string[])
{
    for (let i=0 ; i<colors.length ; i++)
    {
    if (colors[i] == "red"||colors[i] == "blue"||colors[i] == "purple"||colors[i] == "green")
    {
        console.log("esta en el arcoiris? " + true)
    }
    else{console.log("esta en el arcoiris? " + false)}
}
}
// isRainbow(["red","white","yellow"])

export function add(myWords:string[]):number
{
    let resultado:number
        resultado = 0;
    for (let i=0 ; i<myWords.length ; i++)
    {
        resultado +=  myWords[i].length
    }
    return resultado
}
//add(["hola","como","estas?"])