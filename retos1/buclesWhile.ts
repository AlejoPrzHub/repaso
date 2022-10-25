function hasEven(myNums:number[])
{
    let i=0;
    while(i<myNums.length)
    {
        if(myNums[i] % 2 ==0){console.log("par")};
        i++;
    }
}

function startWithM(myNames:string[])
{
    let i=0;
    while(i<myNames.length)
    {
        if (myNames[i].charCodeAt(0) == 77){true}
        else{false};
        i++;
    }
}